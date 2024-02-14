

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

import Header from '@/components/Header.vue';
import Balance from '@/components/Balance.vue';
import IncomeExpenses from '@/components/IncomeExpenses.vue';
import TransactionList from '@/components/TransactionList.vue';
import AddTransaction from '@/components/AddTransaction.vue';

const toast = useToast();

// ДАННЫЕ ТРАНЗАКЦИИ
const transactions = ref([]);

onMounted(() => {
  // при монтаже данных сохраняет в локальное хранилище
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

// СУММА.БАЛАНС
const total = computed(() => {
  // аккумулировать и сложить результат
  return transactions.value.reduce((acc, transaction) => {
    // итоговая сумма
    return acc + transaction.amount;
  }, 0);
});

// ДОХОДЫ
const income = computed(() => {
  return transactions.value
    // фильтруем сумму если она больше 0
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
});

// РАСХОДЫ
const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
});

// ДОБАВИТЬ ТРАНЗАКЦИЮ
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
    date: transactionData.date,
  });

  saveTransactionsToLocalStorage();

  toast.success('Транзакция добавлена.');
};

// ГЕНЕРАЦИЯ УНИКАЛЬНОГО ID
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

// УДАЛИТЬ ТРАНЗАКЦИЮ
const handleTransactionDeleted = (id) => {
  // фильтр по id
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id);

  saveTransactionsToLocalStorage();

  toast.success('Transaction deleted.');
};

// Сохранение в локальном хранилище
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
};
</script>

<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :income="+income" :expenses="+expenses" />
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<style lang="scss" scoped>
</style>
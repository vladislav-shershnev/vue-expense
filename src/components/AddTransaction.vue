<script setup>
import { useToast } from 'vue-toastification';
import { ref } from 'vue';

const text = ref('');
const amount = ref('');
const date = ref('');

// toast interface
const toast = useToast();

// генерация события
const emit = defineEmits(['transactionSubmitted']);

// ОТПРАВКА ДАННЫХ ФОРМЫ
const onSubmit = () => {
  if (!text.value || !amount.value || !date.value) {
    // Отобразить всплывающее сообщение об ошибке, если какое-либо поле пусто.
    toast.error('Все поля должны быть заполнены.');
    return;
  }

  // ТЕКСТ, СУММА, ДАТА - ДАННЫЕ О ТРАНЗАКЦИИ
  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
    date: date.value,
  };

  // создаем событие транзакции с данными
  emit('transactionSubmitted', transactionData);

  // Очистка формы
  text.value = '';
  amount.value = '';
  date.value = '';
};
</script>

<template>
  <h3>Добавить новую транзакцию</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Текст:</label>
      <input type="text" id="text" placeholder="Введите текст..." v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount">Сумма:</label>
      <input type="text" id="amount" placeholder="Введите сумму..." v-model="amount" />
    </div>
    <div class="form-control">
      <label for="date">Дата:</label>
      <input type="date" id="date" v-model="date" />
    </div>
    <button class="btn">Добавить транзакцию</button>
  </form>
</template>




<style lang="scss" scoped>
.form-control{
  margin-top: 20px;
}
label {
  display: block;
  margin: 10px 0;
}

input[type='text'],
input[type='number'] {
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}
.btn {
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
}
.btn:focus,
.delete-btn:focus {
  outline: 0;
}
</style>

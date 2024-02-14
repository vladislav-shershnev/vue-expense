<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['transactionDeleted']);

// УДАЛЕНИЕ ТРАНЗАКЦИИ
const deleteTransaction = (id) => {
  emit('transactionDeleted', id);
};
</script>

<template>
  <div class="transaction">
    <h3 class="transaction__title">История</h3>
    <ul id="list" class="transaction-info list">
      <li v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'">
        <div class="transaction-inner">
          <div class="transaction-inner__date">{{ transaction.date }}</div>
          <div class="transaction-inner__descr">
            <div>{{ transaction.text }}</div>
            <div class="transaction-inner__descr_summ">{{ transaction.amount }}<span>₽</span></div>
          </div>
        </div>
        <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
      </li>
    </ul>
  </div>
</template>



<style lang="scss" scoped>

.transaction-inner {
  width: 100%;
  &__date{
    font-size: 17px;
    color: #757272;
  }
  &__descr {
    display: flex;
    justify-content: space-between;
    text-align: start;
    margin-top: 10px;
    line-height: 30px;
    padding: 0 20px;
    &_summ{
      padding: 0 15px;
      display: flex;
      span{
        padding-left: 5px;
      }
    }
  }
}

.list {
  display: flex;
  flex-direction: column-reverse;
  list-style-type: none;
  padding: 0;
  margin: 20px 0 40px;

}

.list li {
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
  transition: 0.3s;
  &:hover{
    scale: 105%;
  }
}

.list li.plus {
  border-right: 5px solid #2ecc71;
}

.list li.minus {
  border-right: 5px solid #c0392b;
}
</style>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});
</script>


<template>
  <div class="inc-container">
    <div>
      <h4>Доход</h4>
      <p id="money-plus" class="money plus">+{{ income }} ₽</p>
    </div>
    <div>
      <h4>Расход</h4>
      <p id="money-minus" class="money minus">{{ expenses }} ₽</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inc-container {
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.inc-container>div {
  flex: 1;
  text-align: center;
}

.inc-container>div:first-of-type {
  border-right: 1px solid #dedede;
}
.money {
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
}
.money.plus {
  color: var(--green-color);
}
.money.minus {
  color: var(--red-color);
}
</style>

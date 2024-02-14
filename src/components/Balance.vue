<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>


<template>
  <div class="balance">
    <h4>Баланс:</h4>
    <h1 class="balance__summ" id="balance">{{ total }} ₽</h1>
  </div>
</template>

<style lang="scss" scoped>
.balance{
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  &__summ{
    margin-left: 10px;
  }
}
</style>



<script setup>
import { ref } from 'vue';

const menuItems = ref([
  { id: 1, name: 'Главная' },
  { id: 2, name: 'Статистика' }
]);
</script>

<template>
  <div class="header">
    <div class="header__logo">
      <h2>Трекер расходов</h2>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.header {
  text-align: center;

  &__logo {
    background: rgb(166, 165, 195);
    background: linear-gradient(90deg, rgba(166, 165, 195, 1) 0%, rgba(179, 179, 231, 1) 29%, rgba(142, 118, 182, 1) 100%);
    padding: 10px 0 10px;
  }

  h2 {
    font-size: 32px;
  }
}

.nav {

  border-bottom: 1px solid #bbb;
  padding-bottom: 10px;
  margin-top: 20px;
  ul{
    display: flex;
  align-items: center;
  justify-content: center;
  li{
    margin-left: 30px;
  }
  }

}
</style>
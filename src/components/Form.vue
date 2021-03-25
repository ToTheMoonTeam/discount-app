<template>
  <div class="form">

    <div class="card-form">
      <form action="">
        <input type="text" class="form-control mb-2" placeholder="Имя">
        <input type="number" class="form-control mb-2" placeholder="Телефон">
        <input type="number" class="form-control mb-2" placeholder="Дата рождения">
        <input type="number" class="form-control mb-2" placeholder="Номер карты ИдеалТрейд">
        <input type="number" class="form-control mb-2" placeholder="Оцените качество поставки">
        <input type="number" class="form-control mb-4" placeholder="Оцените качество работы">
        <router-link to="/sales" class="btn" tag="button">Отправить</router-link>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped>
.card-form {
  background-color: #ffffff;
  margin-top: 100px;
  padding: 50px;
  border-radius: 20px;
}

form {
  width: 250px;
  height: auto;
}

form .btn {
  padding: 8px 15px;
  background-color: #ffbc13;
  text-transform: uppercase;
  font-weight: 500;
}
</style>

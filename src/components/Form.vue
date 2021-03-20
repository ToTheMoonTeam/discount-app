<template>
  <div class="form">
    <h1 class="mb-5">Заполните форму</h1>

    <form action="">
      <input type="text" class="form-control mb-2" placeholder="Имя">
      <input type="number" class="form-control mb-4" placeholder="Телефон">
      <button type="submit" class="btn btn-primary">Отправить</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 250px;
}

form .btn {
  width: 110px;
  margin: 0 auto;
}
</style>

<template>
  <div class="admin">

    <div class="card-form">
      <h1 class="mb-4">Войти</h1>

      <form action="">
        <input type="text" class="form-control mb-2" placeholder="Логин">
        <input type="text" class="form-control mb-4" placeholder="Пароль">
        <button class="btn">Отправить</button>
      </form>
    </div>

  </div>
</template>

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

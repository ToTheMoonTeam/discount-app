<template>
  <div class="login">

    <div class="card-form">
      <h1 class="mb-4">Войти</h1>

      <form @submit.prevent="login">
        <input class="form-control mb-4" placeholder="Пароль" v-model="password">
        <button class="btn">Отправить</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      password: ''
    }
  },
  methods: {
    login() {
      if (this.password === 'admin') {
        this.$router.go(this.$router.push('/700af4ec-c7d8-4c9b-90ab-b3e44a1e89c0'))
      }
    }
  }
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

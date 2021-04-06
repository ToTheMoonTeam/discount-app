<template>
  <div class="login">

    <div class="card-form">
      <h1 class="mb-4">Войти</h1>

      <v-form @submit.prevent="login">
        <v-text-field
            label="Пароль"
            v-model="password"
        ></v-text-field>

        <v-btn type="submit">Отправить</v-btn>
      </v-form>
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
</style>

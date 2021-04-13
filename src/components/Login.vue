<template>
  <div class="login">

    <div class="card-form">

      <v-form @submit.prevent="login">
        <v-text-field
            label="Пароль"
            v-model="password"
            color="amber accent-4"
        ></v-text-field>

        <v-btn type="submit" color="amber accent-3">Войти</v-btn>
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
        this.$router.go(this.$router.push('/admin'))
      }
    }
  }
}
</script>

<style scoped>
.card-form {
  background-color: #ffffff;
  margin-top: 200px;
  padding: 50px;
  border-radius: 20px;
}

form {
  width: 250px;
  height: auto;
}
</style>

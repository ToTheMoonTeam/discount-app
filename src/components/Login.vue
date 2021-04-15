<template>
  <div class="login">

    <div class="card-form">

      <v-form @submit.prevent="login"
              ref="form"
              v-model="valid"
              lazy-validation
      >
        <v-text-field
            label="Пароль"
            v-model="password"
            color="amber accent-4"
            type="password"
            :rules="[v => !!v || 'Введите пароль']"
            required
        ></v-text-field>

        <v-btn type="submit"
               color="amber accent-3"
               class="mt-3"
               :disabled="!valid"
               @click="validate"
        >
          Войти
        </v-btn>
      </v-form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      password: '',
      valid: true
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
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

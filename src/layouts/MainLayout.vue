<template>
  <div id="app">
    <v-app>
      <div class="head">
        <v-container>
          <span class="text">Продажа нерудных материалов и аренда спецтехники в СПб и области</span>
        </v-container>

        <v-btn class="mt-1 btn" text dark @click="goToLogin">Войти</v-btn>
      </div>

      <div class="logo">
        <a href="https://idealnerud.ru">
          <img src="@/assets/logo.png" alt="" />
        </a>
      </div>

      <div class="content">
        <router-view />
      </div>

      <footer class="footer">
        <div class="container">
          <span>© 2021</span><span class="px-2">«ООО ИДЕАЛТРЕЙД»</span
          ><a href="https://idealnerud.ru/policy/">Политика конфиденциальности</a>
        </div>
      </footer>
    </v-app>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.go(this.$router.push('/login'))
    },
  },
}
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
}

.content {
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
}

.footer {
  flex-shrink: 0;
  padding: 20px;
  margin-top: 40px;
}

* {
  box-sizing: border-box;
}

.logo {
  background: #ffbc13;
  padding: 30px;
}

.head {
  background: #1b1b1b;
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
}

.footer {
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  padding: 20px;
  background: #1b1b1b;
}

.text {
  margin-left: 110px;
}

@media screen and (max-width: 700px) {
  .head .text {
    margin-left: 0;
  }
  .head {
    align-items: center;
  }
}
</style>

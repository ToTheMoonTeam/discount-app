<template>
  <div id="app">
    <v-app>

      <div class="content">
        <v-main>
          <component :is="layout">
            <router-view></router-view>
          </component>
        </v-main>
      </div>

    </v-app>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  name: 'app',
  components: {
    EmptyLayout, MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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
}

.footer {
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  padding: 20px;
  background: #1b1b1b;
}
</style>
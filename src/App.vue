<template>
  <div id="app">
    <v-app>
      <div class="content">
        <v-main>
          <component :is="layout">
            <router-view />
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

  components: { EmptyLayout, MainLayout },

  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
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

* {
  box-sizing: border-box;
}
</style>

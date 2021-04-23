<template>
  <div id="app">
    <v-app>

      <div class="content">
        <router-view></router-view>
      </div>

    </v-app>
  </div>
</template>

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
}

* {
  box-sizing: border-box;
}
</style>
<template>
  <div class="prostomarik">
    <div class="btn-wrapper">
      <div class="btn">
        <img src="@/assets/moon.jpg" alt="">
        <h1>Разрабатываем неразрабатываемое</h1>
        <a href="https://github.com/ToTheMoonTeam">github.com/ToTheMoonTeam</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prostomarik"
}
</script>

<style scoped>
body {
  background-color: black;
}

.prostomarik {
  background: #000000;
  height: 100%;
  width: 100%;
}

.btn-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  padding-bottom: 170px;
}

.prostomarik .btn {
  margin: 0;
}

.btn img {
  width: 375px;
  height: 375px;
}

.btn h1 {
  margin-top: 30px;
  margin-bottom: 7px;
  color: #f0f2f3;
}

.btn a {
  font-size: 20px;
  text-decoration: none;
}

</style>
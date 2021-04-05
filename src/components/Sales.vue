<template>
  <div class="sales">
    <h1 class="my-5">Доступные скидки</h1>

    <!--    <div class="container">-->
    <!--      <div class="row mb-4">-->`
    <!--        <div class="col">-->
    <!--          <div class="card mb-3">-->
    <!--            <div class="row">-->
    <!--              <div class="col-md-5">-->
    <!--                <img src="@/assets/1.png" class="m-3">-->
    <!--              </div>-->
    <!--              <div class="col-md-7">-->
    <!--                <div class="card-body m-3">-->
    <!--                  <h5 class="card-title">Ваш Строитель</h5>-->
    <!--                  <p class="card-text">Cтроительные работы</p>-->
    <!--                  <h1>5%</h1>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="col">-->
    <!--          <div class="card mb-3">-->
    <!--            <div class="row">-->
    <!--              <div class="col-md-5">-->
    <!--                <img src="@/assets/1.png" class="m-3">-->
    <!--              </div>-->
    <!--              <div class="col-md-7">-->
    <!--                <div class="card-body m-3">-->
    <!--                  <h5 class="card-title">Ваш Строитель</h5>-->
    <!--                  <p class="card-text">Cтроительные работы</p>-->
    <!--                  <h1>5%</h1>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="col">-->
    <!--          <div class="card mb-3">-->
    <!--            <div class="row">-->
    <!--              <div class="col-md-5">-->
    <!--                <img src="@/assets/1.png" class="m-3">-->
    <!--              </div>-->
    <!--              <div class="col-md-7">-->
    <!--                <div class="card-body m-3">-->
    <!--                  <h5 class="card-title">Ваш Строитель</h5>-->
    <!--                  <p class="card-text">Cтроительные работы</p>-->
    <!--                  <h1>5%</h1>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="row mb-4">-->
    <!--        <div class="col">-->
    <!--          <div class="card mb-3">-->
    <!--            <div class="row">-->
    <!--              <img src="@/assets/2.png" class="card-img-top w-75 mt-5 mx-auto">-->
    <!--              <div class="card-body m-3">-->
    <!--                <h5 class="card-title">Elsvz.ru</h5>-->
    <!--                <p class="card-text">Работы по инженерным сетям и автоматике</p>-->
    <!--                <h1>5%</h1>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="col">-->
    <!--          <div class="card mb-3">-->
    <!--            <div class="row">-->
    <!--              <img src="@/assets/2.png" class="card-img-top w-75 mt-5 mx-auto">-->
    <!--              <div class="card-body m-3">-->
    <!--                <h5 class="card-title">Elsvz.ru</h5>-->
    <!--                <p class="card-text">Работы по инженерным сетям и автоматике</p>-->
    <!--                <h1>5%</h1>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="col">-->
    <!--          <div class="card mb-3">-->
    <!--            <div class="row">-->
    <!--              <img src="@/assets/2.png" class="card-img-top w-75 mt-5 mx-auto">-->
    <!--              <div class="card-body m-3">-->
    <!--                <h5 class="card-title">Elsvz.ru</h5>-->
    <!--                <p class="card-text">Работы по инженерным сетям и автоматике</p>-->
    <!--                <h1>5%</h1>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    {{ this.userCards }}

  </div>
</template>

<script>
import {AXIOS} from '@/http-common'

export default {
  name: 'Sales',
  data() {
    return {
      userCards: []
    }
  },
  beforeMount() {
    AXIOS.get('/get_users_cards', {
      params: {
        user_id: this.$route.params.id
      }
    })
    .then(response => {
      this.userCards = response.data
    })
  }
}
</script>

<style scoped>

</style>
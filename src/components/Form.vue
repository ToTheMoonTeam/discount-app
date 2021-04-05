<template>
  <div class="form">

    <div class="card-form">
      <h2 class="mb-5">Заполните форму <br>для активации карты <br>и доступа к персональным скидкам</h2>
      <form @submit.prevent="formSubmit">
        <input class="form-control mb-2" placeholder="Имя" v-model="name"/>
        <input class="form-control mb-2" placeholder="Телефон" v-model="phone_number"/>
        <input class="form-control mb-2" placeholder="Дата рождения" v-model="birthday"/>
        <input class="form-control mb-2" placeholder="Номер карты ИдеалТрейд" v-model="id"/>
        <select class="form-select mb-2" v-model="shipping_quality">
          <option value="0">Оцените качество поставки</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <select class="form-select mb-4" v-model="work_quality">
          <option value="0">Оцените качество работы</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <div class="form-check m-4">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Согласие на обработку персональных данных
          </label>
        </div>
        <button class="btn">Отправить</button>
      </form>
    </div>

  </div>
</template>

<script>
import {AXIOS} from '@/http-common'

export default {
  name: 'Form',
  data() {
    return {
      name: '',
      phone_number: '',
      birthday: '',
      id: null,
      shipping_quality: 0,
      work_quality: 0
    }
  },
  methods: {
    formSubmit() {
      AXIOS.post('/register', null, {
        params: {
          phone_number: this.phone_number,
          name: this.name,
          id: this.id,
          shipping_quality: this.shipping_quality,
          work_quality: this.work_quality,
          birthday: this.birthday
        }
      })
          .then(response => {
            if (response.status === 200) {
              this.$router.go(this.$router.push('/sales/' + response.data.body.usr.id))
            }
          })
    }
  }
}
</script>

<style scoped>
.card-form {
  margin-top: 20px;
  padding: 50px 70px;
}

form {
  width: 380px;
  margin: 0 auto;
}

form .btn {
  padding: 8px 15px;
  background-color: #ffbc13;
  text-transform: uppercase;
  font-weight: 500;
}
</style>

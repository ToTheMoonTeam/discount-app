<template>
  <div class="form">

    <div class="card-form">
      <h2>Заполните форму <br>для активации карты <br>и доступа к персональным скидкам</h2>

      <v-form @submit.prevent="formSubmit">
        <v-text-field
            label="Имя"
            v-model="name"
        ></v-text-field>

        <v-text-field
            label="Телефон"
            v-model="phone_number"
        ></v-text-field>

        <v-text-field
            label="Дата рождения"
            v-model="birthday"
        ></v-text-field>

        <v-text-field
            label="Номер карты ИдеалТрейд"
            v-model="id"
        ></v-text-field>

        <v-select
            :scores="scores"
            label="Оцените качество поставки"
            v-model="shipping_quality"
        ></v-select>

        <v-select
            :scores="scores"
            label="Оцените качество работы"
            v-model="work_quality"
        ></v-select>

        <div class="form-check m-4">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Согласие на обработку персональных данных
          </label>
        </div>
        <button class="btn">Отправить</button>
      </v-form>
    </div>

  </div>
</template>

<script>
import {AXIOS} from '@/http-common'

export default {
  name: 'Form',
  data() {
    return {
      scores: [],
      name: '',
      phone_number: '',
      birthday: '',
      id: null,
      shipping_quality: 0,
      work_quality: 0
    }
  },

  created: {
    this.scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
  margin-top: 40px;
  padding: 50px 70px;
}

.card-form h2 {
  margin-bottom: 30px;
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

<template>
  <div class="form">

    <div class="card-form">
      <h2>Заполните форму <br>для активации карты <br>и доступа к персональным скидкам</h2>

      <v-form @submit.prevent="formSubmit">
        <v-text-field
            color="amber accent-4"
            label="Имя"
            v-model="name"
        ></v-text-field>

        <v-text-field
            color="amber accent-4"
            label="Телефон"
            v-model="phone_number"
        ></v-text-field>

        <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="date"
                label="Дата рождения"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                color="amber accent-4"
            ></v-text-field>
          </template>
          <v-date-picker
              ref="picker"
              v-model="date"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              color="amber accent-4"
              locale="ru-RU"
              @change="save"
          ></v-date-picker>
        </v-menu>

        <v-text-field
            color="amber accent-4"
            label="Номер карты ИдеалТрейд"
            v-model="id"
        ></v-text-field>

        <v-select
            color="amber accent-4"
            :items="quality"
            label="Оцените качество поставки"
            v-model="shipping_quality"
        ></v-select>

        <v-select
            color="amber accent-4"
            :items="quality"
            label="Оцените качество работы"
            v-model="work_quality"
        ></v-select>

        <v-checkbox
            color="amber accent-4"
            label="Согласие на обработку персональных данных"
            hide-details
        ></v-checkbox>

        <v-btn class="mt-8" color="amber accent-3" type="submit">Отправить</v-btn>
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
      quality: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      name: '',
      phone_number: '',
      date: null,
      menu: false,
      id: null,
      shipping_quality: 0,
      work_quality: 0
    }
  },

  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },

  methods: {
    save(date) {
      this.$refs.menu.save(date)
    },

    formSubmit() {
      AXIOS.post('/register', null, {
        params: {
          phone_number: this.phone_number,
          name: this.name,
          id: this.id,
          shipping_quality: this.shipping_quality,
          work_quality: this.work_quality,
          birthday: this.date
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
</style>

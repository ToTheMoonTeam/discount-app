<template>
  <div class="admin">

    <h1 class="m-5">Админка</h1>

    <vuetable ref="vuetable"
              :api-mode="false"
              :data="allUsers"
              :fields="['Имя', 'Телефон', 'Номер карты', 'День рождения', 'Скидочные карты', 'Качество доставки', 'Качество работы']"
    ></vuetable>

    <!--загружаемая табличка в excel-->

  </div>
</template>

<script>
import Vuetable from 'vuetable-2'
import {AXIOS} from '@/http-common'

export default {
  components: {
    Vuetable
  },

  data() {
    return {
      allUsers: []
    }
  },

  created() {
    AXIOS.get('/get_all_users')
        .then(response => {
          this.allUsers = Object.values(response.data.body.all_users)
        })
  }
}
</script>
<template>
  <div class="sales">
    <h1 class="my-10">Доступные вам скидочные карты:</h1>

    <div v-if="this.userCards.length === 0">
      У вас пока нет доступных скидочных карт
    </div>

    <div v-else class="d-flex justify-center flex-wrap">
      <v-card
          outlined
          rounded
          v-for="card in userCards"
          :key="card.id"
          class="ma-3 pa-5"
          width="400px"
      >
        <v-img
            v-if="card.company_name === 'Ваш Строитель'"
            width="150px"
            class="mx-auto"
            src="@/assets/1.png"
        ></v-img>
        <v-img
            class="ma-5"
            v-if="card.company_name === 'Elsvz.ru'"
            src="@/assets/2.png"
        ></v-img>
        <v-card-title v-if="card.company_name !== 'Elsvz.ru'">
          <v-spacer>
            {{ card.company_name }}
          </v-spacer>
        </v-card-title>
        <v-card-text>
          <p class="mb-7" v-if="card.company_name === 'Elsvz.ru'">Работы по инженерным сетям и автоматике: <a href="https://elsvz.ru">Elsvz.ru</a></p>
          <h1 class="yellow--text text--darken-3">{{ card.sale * 100 }}%</h1>
        </v-card-text>
      </v-card>
    </div>

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

  created() {
    AXIOS.get('/get_users_cards', {
      params: {
        user_id: this.$route.params.id
      }
    })
        .then(response => {
          this.userCards = Object.values(response.data.body.cards)
        })
  }
}
</script>

<style scoped>

</style>
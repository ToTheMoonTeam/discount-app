<template>
  <div class="sales">
    <h1 class="my-10">Доступные вам скидочные карты:</h1>

    <div v-if="this.userCards.length === 0">
      У вас пока нет доступных скидочных карт
    </div>
    <div v-else class="d-flex justify-center flex-wrap">
      <v-card
          v-for="card in userCards"
          :key="card.id"
          class="ma-4 pb-5 pt-3 px-4"
          width="300px"
          outlined
      >
        <v-card-title>
          <v-spacer>
            {{ card.company_name }}
          </v-spacer>
        </v-card-title>

        <v-card-text>
          <h1>{{ card.sale * 100 }} %</h1>
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
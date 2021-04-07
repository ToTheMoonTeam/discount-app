<template>
  <div class="sales">
    <h1 class="my-5">Доступные скидки</h1>

    {{ this.userCards.cards }}

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
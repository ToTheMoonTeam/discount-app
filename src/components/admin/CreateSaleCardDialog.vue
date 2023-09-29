<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="amber accent-3" class="mb-2 myClass" v-bind="attrs" v-on="on">
        Создать скидочную карту
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="headline mt-5 ml-5">Создать скидочную карту</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-text-field v-model="company_name" label="Название компании" color="amber accent-4" />

          <v-text-field v-model="sale" label="Размер скидки" color="amber accent-4" />
        </v-container>
      </v-card-text>

      <v-card-actions class="pb-4">
        <v-spacer />

        <v-btn color="amber accent-4" text @click="dialog = false">
          Закрыть
        </v-btn>

        <v-btn color="amber accent-3" @click="createCard">
          Создать
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { api } from '@/axios'

export default {
  name: 'CreateSaleCardDialog',

  data() {
    return {
      company_name: '',
      sale: null,
      dialog: false,
    }
  },

  methods: {
    createCard() {
      api.post('/register_card', null, {
        params: {
          company_name: this.company_name,
          sale: this.sale,
        },
      })

      this.dialog = false
      this.sale = null
      this.company_name = ''
    },
  },
}
</script>

<style scoped>
.myClass:focus::before {
  opacity: 0 !important;
}
</style>

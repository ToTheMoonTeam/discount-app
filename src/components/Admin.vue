<template>
  <div class="admin">

    <v-data-table
        :headers="headers"
        :items="allUsers"
        disable-pagination
        :hide-default-footer="true"
        class="my-15"
    >

      <template v-slot:top>
        <v-toolbar
            flat
        >
          <v-toolbar-title>Клиенты</v-toolbar-title>
          <v-divider
              class="mx-4"
              inset
              vertical
          ></v-divider>
          <v-spacer></v-spacer>

<!--          <CreateSaleCardDialog />-->

          <v-btn
              color="amber accent-3"
              class="ml-3 mb-2"
              href="https://vasiliy566.pythonanywhere.com/export_excele"
              target="_blank"
          >
            <v-icon color="black">
              mdi-microsoft-excel
            </v-icon>
          </v-btn>

        </v-toolbar>
      </template>

      <template v-slot:item.action="{ item }">
        <v-icon
            @click="openDialog(item)"
            class="mr-3"
        >
          mdi-plus-circle
        </v-icon>
        <v-icon
            @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>

    </v-data-table>

    <v-dialog
        v-model="dialogUserCards"
        width="1000"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Скидочные карты
        </v-card-title>

        <v-card-text>
          <h2 class="my-5">Скидочные карты пользователя:</h2>
          <div v-if="this.userCards.length === 0">
            У пользователя нет карт
          </div>
          <div v-else class="d-flex justify-center flex-wrap">
            <v-card
                outlined
                rounded
                v-for="card in userCards"
                :key="card.id"
                class="ma-4 pa-6"
                width="300px"
            >
              <v-img
                  v-if="card.id === 1"
                  width="150px"
                  class="mx-auto"
                  src="@/assets/1.png"
              ></v-img>
              <v-img
                  class="ma-4"
                  v-if="card.id === 2"
                  src="@/assets/2.png"
              ></v-img>
              <v-card-title v-if="card.id !== 2">
                <v-spacer>
                  {{ card.company_name }}
                </v-spacer>
              </v-card-title>
              <v-card-text>
                <p class="mb-7" v-if="card.id === 2">Работы по инженерным сетям и автоматике: <a href="https://elsvz.ru" target="_blank">Elsvz.ru</a></p>
                <h1 class="yellow--text text--darken-3">{{ card.sale * 100 }}%</h1>
              </v-card-text>
              <v-card-actions>
                <v-spacer>
                  <v-btn
                      color="amber accent-3"
                      small
                      disabled
                  >
                    Удалить
                  </v-btn>
                </v-spacer>
              </v-card-actions>
            </v-card>
          </div>

          <h2 class="my-5">Все скидочные карты:</h2>
          <div v-if="this.allCards.length === 0">
            <p>У вас нет созданных карт</p>
          </div>
          <div v-else class="d-flex justify-center flex-wrap">
            <v-card
                outlined
                rounded
                v-for="card in allCards"
                :key="card.id"
                class="ma-4 pa-6"
                width="300px"
            >
              <v-img
                  v-if="card.id === 1"
                  width="150px"
                  class="mx-auto"
                  src="@/assets/1.png"
              ></v-img>
              <v-img
                  class="ma-4"
                  v-if="card.id === 2"
                  src="@/assets/2.png"
              ></v-img>
              <v-card-title v-if="card.id !== 2">
                <v-spacer>
                  {{ card.company_name }}
                </v-spacer>
              </v-card-title>
              <v-card-text>
                <p class="mb-7" v-if="card.id === 2">Работы по инженерным сетям и автоматике: <a href="https://elsvz.ru">Elsvz.ru</a></p>
                <h1 class="yellow--text text--darken-3">{{ card.sale * 100 }}%</h1>
              </v-card-text>
              <v-card-actions>
                <v-spacer>
                  <v-btn
                      color="amber accent-3"
                      small
                      @click="linkCard(card)"
                  >
                    Добавить
                  </v-btn>
                </v-spacer>
              </v-card-actions>
            </v-card>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="amber accent-4"
              text
              @click="dialogUserCards = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import {AXIOS} from '@/http-common'
import moment from 'moment'
// import CreateSaleCardDialog from '@/components/admin/CreateSaleCardDialog'

export default {
  // components: {
  //   CreateSaleCardDialog
  // },
  data() {
    return {
      allUsers: [],
      headers: [
        {text: 'Имя', value: 'name'},
        {text: 'Телефон', value: 'phone_number'},
        {text: 'Номер карты', value: 'id'},
        {text: 'День рождения', value: 'birthday'},
        {text: 'Качество доставки', value: 'shipping_quality'},
        {text: 'Качество работы', value: 'work_quality'},
        {text: 'Действия', value: 'action', sortable: false},
      ],
      dialogUserCards: false,
      user_id: null,
      userCards: [],
      allCards: []
    }
  },

  created() {
    AXIOS.get('/get_all_users')
        .then(response => {
          const allUsers = Object.values(response.data.body.all_users)
          allUsers.forEach(function (user) {
            user.birthday = moment(user.birthday).format('DD.MM.YYYY')
          })
          this.allUsers = allUsers
        })
  },

  methods: {
    openDialog(item) {
      this.dialogUserCards = true
      this.user_id = item.id
      AXIOS.get('/get_users_cards', {
        params: {
          user_id: item.id,
        }
      })
          .then(response => {
            this.userCards = Object.values(response.data.body.cards)
          })

      AXIOS.get('/get_all_cards')
          .then(response => {
            this.allCards = Object.values(response.data.body.all_cards)
          })
    },

    deleteItem(item) {
      AXIOS.post('/remove_user', null, {
        params: {
          id: item.id
        }
      })
      this.$router.go()
    },

    linkCard(card) {
      AXIOS.post('/link_card', null, {
        params: {
          card_id: card.id,
          user_id: this.user_id
        }
      })
          .then(response => {
            if (response.status === 200) {
              AXIOS.get('/get_users_cards', {
                params: {
                  user_id: this.user_id,
                }
              })
                  .then(response => {
                    this.userCards = Object.values(response.data.body.cards)
                  })
            }
          })
    }
  }
}
</script>

<style scoped>


</style>
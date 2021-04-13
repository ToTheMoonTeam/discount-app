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
          <v-toolbar-title>Таблица с пользователями</v-toolbar-title>
          <v-divider
              class="mx-4"
              inset
              vertical
          ></v-divider>
          <v-spacer></v-spacer>

          <v-dialog
              v-model="dialog"
              max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="amber accent-3"
                  class="mb-2 myClass"
                  v-bind="attrs"
                  v-on="on"
              >
                Создать скидочную карту
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline mt-5 ml-5">Создать скидочную карту</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-text-field
                      v-model="company_name"
                      label="Название компании"
                      color="amber accent-4"
                  ></v-text-field>
                  <v-text-field
                      v-model="sale"
                      label="Размер скидки"
                      color="amber accent-4"
                  ></v-text-field>
                </v-container>
              </v-card-text>

              <v-card-actions class="pb-4">
                <v-spacer></v-spacer>
                <v-btn
                    color="amber accent-3"
                    @click="close"
                >
                  Закрыть
                </v-btn>
                <v-btn
                    color="amber accent-3"
                    @click="createCard"
                >
                  Создать
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-btn
              color="amber accent-3"
              class="ml-3 mb-2"
          >
            <v-icon color="black" @click="exportExcel">
              mdi-microsoft-excel
            </v-icon>
          </v-btn>

        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon
            @click="addCards(item)"
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
          <div v-else>
            <v-card
                v-for="card in userCards"
                :key="card.id"
            >
              <v-card-title>
                {{ card.company_name }}
              </v-card-title>
              <v-card-text>
                {{ card.sale * 100 }} %
              </v-card-text>
            </v-card>
          </div>

          <h2 class="my-5">Все скидочные карты:</h2>
          <div v-if="this.allCards.length === 0">
            <p>У вас нет созданных карт</p>
          </div>
          <div v-else class="d-flex justify-space-between flex-wrap">
            <v-card
                v-for="card in allCards"
                :key="card.id"
                class="ma-4"
                width="200px"
            >
              <v-card-title>
                <v-spacer>
                  {{ card.company_name }}
                </v-spacer>
              </v-card-title>
              <v-card-text>
                {{ card.sale * 100 }} %
              </v-card-text>
              <v-card-actions>
                <v-spacer>
                  <v-btn
                      color="amber accent-3"
                      class="mb-4"
                      small>
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
              color="primary"
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

export default {
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
      sale: null,
      company_name: '',
      dialog: false,
      dialogUserCards: false,
      userCards: [],
      allCards: []
    }
  },

  computed: {},

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
    close() {
      this.dialog = false
    },
    addCards(item) {
      this.dialogUserCards = true
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


      // AXIOS.post('/link_card', null, {
      //   params: {
      //     user_id: item.id,
      //     card_id: ''
      //   }
      // })
    },
    deleteItem(item) {
      AXIOS.post('/remove_user', null, {
        params: {
          id: item.id
        }
      })
      this.$router.go()
    },
    createCard() {
      AXIOS.post('/register_card', null, {
        params: {
          company_name: this.company_name,
          sale: this.sale
        }
      })
      this.dialog = false
      this.sale = null
      this.company_name = ''
    },
    exportExcel() {
      AXIOS.get('/export_excele')
          .then((response) => {
            console.log(response.data)
          })
    }
  }
}
</script>

<style scoped>
.myClass:focus::before {
  opacity: 0 !important;
}
</style>
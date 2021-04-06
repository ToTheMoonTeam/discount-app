<template>
  <div class="admin">

    <v-data-table
        :headers="headers"
        :items="allUsers"
        disable-pagination
        :hide-default-footer="true"
        class="my-15"
        @click:row="dialogUserCards = true"
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
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
              >
                Создать скидочную карту
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Создать скидочную карту</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-text-field
                      v-model="company_name"
                      label="Название компании"
                  ></v-text-field>
                  <v-text-field
                      v-model="sale"
                      label="Размер скидки"
                  ></v-text-field>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                >
                  Закрыть
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="createCard"
                >
                  Создать
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-btn
              color="primary"
              class="ml-3 mb-2"
              dark
          >
            <v-icon dark>
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
        width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </div>
</template>

<script>
import {AXIOS} from '@/http-common'

export default {
  data() {
    return {
      allUsers: [],
      headers: [
        {text: 'Имя', value: 'name'},
        {text: 'Телефон', value: 'phone_number'},
        {text: 'Номер карты', value: 'id'},
        {text: 'День рождения', value: 'birthday'},
        {text: 'Cкидочные карты', value: 'cards'},
        {text: 'Качество доставки', value: 'shipping_quality'},
        {text: 'Качество работы', value: 'work_quality'},
        {text: 'Действия', value: 'action', sortable: false},
      ],
      sale: null,
      company_name: '',
      dialog: false,
      dialogUserCards: false,
    }
  },

  created() {
    AXIOS.get('/get_all_users')
        .then(response => {
          this.allUsers = Object.values(response.data.body.all_users)
        })
  },

  methods: {
    close() {
      this.dialog = false
    },
    addCards(item) {
      AXIOS.post('/link_card', null, {
        params: {
          user_id: item.id,
          card_id: ''
        }
      })
      this.$router.go()
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
    }
  }
}
</script>

<style scoped>
</style>
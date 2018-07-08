export default {
  name: 'email-compose',
  components: {},
  template: `
          <section>
              <div>
                  <button><i class="fas fa-times" @click="closeEmail"></i></button>
                  <button><i class="far fa-paper-plane" @click="sendEmail"></i></button>
              </div>
              <div>
                  <form>
                      <input type="text" v-model="newEmail.subject" placeholder="search">
                      <textarea type="text" v-model="newEmail.body"></textarea>
                  </form>
              </div>
          </section>
  `,
  data() {
      return {
          newEmail: {
              subject: null,
              body: null,
          }
      }
  },
  created(){},
  methods: {
      closeEmail() {
          this.$emit('closeEmailWindow')
      },
      sendEmail() {
          this.$emit('sendEmail', this.newEmail)
      }
  },

        
}
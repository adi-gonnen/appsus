export default {
  name: 'email-compose',
  components: {},
  template: `
          <section class="new-mail">
              <div class="new-mail-btn">
                  <button><i class="mail-btn fas fa-times" @click="closeEmail"></i></button>
                  <button><i class="mail-btn far fa-paper-plane" @click="sendEmail"></i></button>
              </div>
              <div>
                  <form class="mail-form flex column" >
                      <input type="text" v-model="newEmail.subject" placeholder="Subject">
                      <textarea class="txt-area-new"type="text" v-model="newEmail.body" placeholder="Message"></textarea>
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
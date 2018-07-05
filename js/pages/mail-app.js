
import emailService from '../service/email-service.js'
import emailList from '../cmps/mail/email-list-cmp.js'
import emailDetails from '../cmps/mail/email-details-cmp.js'

export default {
    components: {
      emailService,
      emailList,
      emailDetails
    },
    props: [],
        template: `
          <section class="mail-app">
              <h1>mail</h1>
          <email-list :emails="emails"></email-list>
          </section>
    `,
    data() {
        return {
            emails: null,
        }
    },
    created() {
        emailService.query()
            .then(emails => this.emails = emails)
      },
}
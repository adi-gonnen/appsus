
<<<<<<< HEAD
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
=======
export default {
    template: `
            <section class="keep-app">
            <h1>keep-imgs</h1>
            </section>
            `,
>>>>>>> f292e7ca17f49b1f09efdc98c40aeeb4120e83aa
}
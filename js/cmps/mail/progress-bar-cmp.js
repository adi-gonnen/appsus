
import emailsService from '../../service/email-service.js'
import eventBus, {EVENT_UPDATE_EMAILS, EVENT_UPDATE_UNREAD} from '../../service/event-bus-service.js'


export default {
    components: {
        emailsService,
        eventBus,
    },
    template:`
        <section>
            <div class="e-progress-container">
                <div class="e-bar" :style="'width:' + progress + '%'">{{progress.toFixed(1)}}%</div>
            </div>
        </section>
    `,
    data() {
        return {
            mailsRead: null,
            totalMails: null,
        }
    },
    created() {
        this.countEmails()
        eventBus.$on(EVENT_UPDATE_EMAILS, () => {
          this.countEmails()
        })
        eventBus.$on(EVENT_UPDATE_UNREAD, () => {
          this.countEmails()
        })
    },
    computed: {
        progress(){
          var progress = this.mailsRead / this.totalMails * 100
          if (isNaN(progress)) return 0
          else return this.mailsRead / this.totalMails * 100
        }
    },
    methods: {
        countEmails() {
            emailsService.countEmails()
                .then(calc => {
                  this.mailsRead = calc.read
                  this.totalMails = calc.total
                  console.log('aaa ', this.mailsRead, 'bbb ',  this.totalMails);
                })
        }
    }
}
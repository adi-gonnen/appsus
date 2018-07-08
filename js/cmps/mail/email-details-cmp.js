

import emailSercive from '../../service/email-service.js'
import eventBus, {EVENT_UPDATE_EMAILS, EVENT_UPDATE_TOGGLE} from '../../service/event-bus-service.js'


export default {
    name: 'mail-app',
    components: {
        emailSercive,
        eventBus,
    },
    template: `
        <section :class="{'e-details-container-mobile': detailsToggle}" v-if="email">
            <div class="e-details-header">
                <div class="e-details-header-name flex space-between">
                    <span class="e-name">{{email.name}}</span>
                    <span class="e-date">{{email.sentAt}}</span>
                </div>
                <div class="e-details-header-subj">
                     <span>{{email.subject}}</span>
                </div>
            </div>
            <div class="e-details-container">{{email.body}}</div>
        </section>
    `,
    data() {
        return {
          email: null,
          detailsToggle: false
        }
    },
    created() {
        this.loadFirstIdxEmail(),
        eventBus.$on(EVENT_UPDATE_EMAILS, () => {
            this.loadFirstIdxEmail()
        })
        eventBus.$on(EVENT_UPDATE_TOGGLE, () => {
            this.detailsToggle = !this.detailsToggle
        })
    },
    watch: {
        '$route.params.mailId': function (mailId) {
            if (!mailId) this.loadFirstIdxEmail()
            else this.loadEmail();
        },

    },
    methods: {
        loadFirstIdxEmail() {
            emailSercive.query()
                .then( emails => {
                    this.email = emails[0]
                    console.log('this email', this.email)
                })
        },
        loadEmail() {
            emailSercive.getEmailById(this.$route.params.mailId)
                .then(email => this.email = email);
        }
    }

}
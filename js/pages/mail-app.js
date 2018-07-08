
import emailService from '../service/email-service.js'
import emailList from '../cmps/mail/email-list-cmp.js'
import emailDetails from '../cmps/mail/email-details-cmp.js'
import emailCtrPanel from '../cmps/mail/email-ctr-panel-cmp.js'
import progressBar from '../cmps/mail/progress-bar-cmp.js'
import emailFilter from '../cmps/mail/email-fitler-cmp.js'
import emailCompose from '../cmps/mail/email-compose-cmp.js'
import eventBus, {EVENT_UPDATE_EMAILS, EVENT_UPDATE_UNREAD} from '../service/event-bus-service.js'

export default {
    name: 'mail-app',
    components: {
      emailService,
      emailList,
      emailDetails,
      emailCtrPanel,
      eventBus,
      progressBar,
      emailFilter,
      emailCompose,
    },
    props: [],
        template: `
            <section class="mail-app" v-if="emails">
                <email-ctr-panel :email="selectedEmail" :emails:="emails" @deleteEmail="deleteEmail" @newEmail="newEmail"></email-ctr-panel>
                <progress-bar></progress-bar>
                <div class="e-main-container flex">
                    <div class="e-filter-list-container">
                        <email-filter class="flex column" @filterMails="setFilter"></email-filter>
                        <email-list :emails="emailsToshow" @mailOpened="loadEmails" @updateSelectedMail="updateSelectedMail"></email-list>
                    </div>
                    <div class="e-details">
                         <email-details></email-details>
                    </div>
                </div>
                <email-compose v-if="sendEmailWindow" @closeEmailWindow="closeEmailWindow" @sendEmail="sendEmail"></email-compose>
            </section>
    `,
    data() {
        return {
            emails: [],
            selectedEmail: null,
            filter: null,
            sendEmailWindow: false
        }
    },
    created() {
        this.loadEmails()
    },
    computed: {
        emailsToshow() {
            let emailsToShow = this.emails

            if (this.filter) {

                // Filter by search
                if (this.filter.byName) {
                    emailsToShow = this.emails.filter(email => {
                        return email.subject.toLowerCase().includes(this.filter.byName.toLowerCase())
                    })
                }

                // Filter by sort
                if (this.filter.bySort) {
                    switch (this.filter.bySort) {
                        case null:
                        break;
                        case 'all':
                            this.$router.push('/mail')
                            return emailsToShow = this.emails;
                            break;
                        case 'Unread':
                            this.$router.push('/mail')
                            emailsToShow = emailsToShow.filter(email => {
                                return !email.isRead
                            });
                            break;
                        case 'Read':
                            this.$router.push('/mail')
                            emailsToShow = emailsToShow.filter(email => {
                                return email.isRead
                            });
                            break;
                    }
                }
            } 
            return emailsToShow
        }
    },
    methods: {
        loadEmails() {
            emailService.query()
            .then(emails => {
                this.emails = emails
            })
        },
        updateSelectedMail(email, idx) {
            this.selectedEmail = {email: email, idx: idx}
            eventBus.$emit(EVENT_UPDATE_UNREAD)
        },
        deleteEmail() {
            if (!this.selectedEmail) emailService.deleteEmail(0)
            else emailService.deleteEmail(this.selectedEmail.idx)
            this.loadEmails()
            this.$router.push('/mail/')
            this.selectedEmail = null
            eventBus.$emit(EVENT_UPDATE_EMAILS)
        },
        setFilter(filterSpec) {
            console.log(filterSpec);
            this.filter = filterSpec
        },
        newEmail(){
            this.sendEmailWindow = true
        },
        closeEmailWindow() {
            this.sendEmailWindow = false
        },
        sendEmail(email) {
            console.log(email);
            emailService.addMail(email)
                .then(() => this.loadEmails())
        }
    }
}
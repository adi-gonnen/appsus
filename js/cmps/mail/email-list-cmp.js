
import emailService from '../../service/email-service.js'
import emailPreview from './email-preview-cmp.js'
import eventBus, {EVENT_UPDATE_TOGGLE} from '../../service/event-bus-service.js'

export default {
    name: 'mail-list',
    components: {
        emailService,
        emailPreview,
    },
    props: ['emails'],
    template: `
            <section :class="{'e-filter-list-container-mobile': menuToggle}">
                <ul>
                    <li v-for="(email, idx) in emails">
                        <router-link :to="'/mail/' + email.id">
                            <email-preview :email="email" @click.native="handler(email, email.id, idx)"></email-preview>
                        </router-link>
                    </li>
                </ul>
            </section>
    `,
    data() {
        return {
            menuToggle: false,
        }
    },
    created() {
        eventBus.$on(EVENT_UPDATE_TOGGLE, () => {
            this.menuToggle = !this.menuToggle
        })   
    },
    methods: {
        handler(mail, emailId, idx) {
            this.emailRead(emailId)
            this.updateSelectedMail(mail, idx)
        },
        emailRead(emailId) {
            emailService.changeMailStatus(emailId)
                .then(() => {this.$emit('mailOpened')
                })
        },
        updateSelectedMail(emailId, idx) {
            this.$emit('updateSelectedMail', emailId, idx)
        }
    },
}
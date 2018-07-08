
import emailSercive from '../../service/email-service.js'
import eventBus, {EVENT_UPDATE_UNREAD, EVENT_UPDATE_TOGGLE} from '../../service/event-bus-service.js'

export default {
    name: 'ctr-panel',
    components: {
        emailSercive,
        eventBus,
    },
    props: ['email', 'emails'],
    template: `
        <section>

            <div class="e-panel-container">
                <div class="e-exit-app">
                    <button><i @click="exiteMailApp" class="fas fa-times"></i></button>
                </div>
                <div class="e-nav-app flex space-between align-center">
                    <div>
                        <button class="e-trash" @click="deleteEmail"><i class="fas fa-trash-alt"></i></button>
                        <button class="e-new" @click="newEmail"> <i class="fas fa-external-link-alt"></i></button>
                    </div>
                    <div>
                        <span @click="changeToggleMenu" :class="{'e-circle-open': toggleMenu}" class="e-circle-container flex align-center">
                            <span class="e-circle" :class="{'e-circle-color' : toggleMenu}"></span>
                        </span>
                    </div>
                </div>
                <div class="e-count">
                    <hr />
                    <p>Inbox ({{emailCount}})</p>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            emailCount: null,
            toggleMenu: false,
        }
    },
    created() {
        this.updateUndread(),
        eventBus.$on(EVENT_UPDATE_UNREAD, () => {
            this.updateUndread()
        })   
    },
    methods: {
        deleteEmail(){
            this.$emit('deleteEmail')
        },
        updateUndread(){
            emailSercive.unreadMail()
            .then(count => this.emailCount = count)
        },
        newEmail() {
            this.$emit('newEmail')
        },
        changeToggleMenu() {
            this.toggleMenu = !this.toggleMenu
            eventBus.$emit(EVENT_UPDATE_TOGGLE)
        },
        exiteMailApp() {
            this.$router.push('/')
        }
    },
}
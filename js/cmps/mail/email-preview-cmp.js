


export default {
  name: 'mail-preview',
  components: {},
  props: ['email'],
  template: `
      <section>
            <div class="e-prev-container flex">
                <div class="e-envelope flex center">
                      <i class="fas fa-envelope-open" v-if="email.isRead"></i>
                      <i class="fas fa-envelope" v-else></i>
                </div>
                <div class="e-email-display">
                    <div class="flex space-between"><span>{{email.name}}</span> <span>{{email.sentAt}}</span></div>
                    <div>{{email.subject}}</div>
                     <!-- <div>{{email.body}}</div> -->
                </div>
            </div>
      </section>
  `,
  computed: {},
  created() {},
  methods: {
      emailRead() {
          this.$emit('emailRead', )
      },
  },
}
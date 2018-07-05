


export default {
  components: {},
  props: ['email'],
  template: `
          <section >
          {{email.subject}},
          {{email.name}},
          {{email.isRead}}
          {{email.sentAt}}
          </section>
  `,
  computed: {},
  created() {},
  methods: {},
}
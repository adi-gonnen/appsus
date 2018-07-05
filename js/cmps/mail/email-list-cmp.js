
import emailService from '../../service/email-service.js'
import emailPreview from './email-preview-cmp.js'

export default {
  components: {
      emailService,
      emailPreview,
  },
  props: ['emails'],
  template: `
          <section>
              <ul>
                  <li v-for="email in emails">
                      <email-preview :email="email"></email-preview>
                  </li>
              </ul>
          </section>
  `,
  data() {
      return {
          selectEmail: null,
      }
  },
  methods: {},
}
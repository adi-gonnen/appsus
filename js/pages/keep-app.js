
<<<<<<< HEAD


export default {
  components: {
      
  },
  
  template: `
          <section class="keep-app">
          <h1>keep</h1>
          </section>
          `,

=======
import keepNotes from '../cmps/keep/keep-notes-cmp.js'


export default {
    components: {
        keepNotes,
    },
    template: `
            <section class="keep-app">
            <h1>keep-app</h1>
            <keep-notes></keep-notes>
            </section>
            `,
>>>>>>> f292e7ca17f49b1f09efdc98c40aeeb4120e83aa
}
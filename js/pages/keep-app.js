
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
}
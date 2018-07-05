

import noteTodos from './note-todos-cmp.js'
import noteImgs from './note-imgs-cmp.js'
import noteText from './note-text-cmp.js'


export default {
    components: {
        noteTodos,
        noteImgs,
        noteText
    },
    props: ['[text, img, todo]'],
    template: `
            <section class="keep-app">
            <note-text></note-text>
            <note-todos></note-todos>
            <note-imgs></note-imgs>
            </section>
            `,
}
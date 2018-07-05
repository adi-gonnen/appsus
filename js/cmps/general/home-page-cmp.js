
import mailApp from '../mail/mail-app-cmp.js'
import keepApp from '../keep/keep-app-cmp.js'


export default {
    components: {
        mailApp,
        keepApp
    },
    
    template: `
            <section class="home-page">
            <h1>sprint 3</h1>
            <keep-app></keep-app>
            <mail-app></mail-app>
            </section>
            `,

}


import mailApp from './mail-app.js'
import keepApp from './keep-app.js'


export default {
    components: {
        mailApp,
        keepApp
    },
    
    template: `
        <section class="home-page">
        <h1>Mail:</h1>
            <mail-app></mail-app>
        </section>
    `,

}

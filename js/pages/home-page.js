
import mailApp from './mail-app.js'
import keepApp from './keep-app.js'


export default {
    components: {
        mailApp,
        keepApp
    },
    
    template: `
            <section class="home-page">
            <h1>keep everything...</h1>
            <keep-app></keep-app>
            
            </section>
            `,

}

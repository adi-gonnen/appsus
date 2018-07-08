
import mailApp from './mail-app.js'
import keepApp from './keep-app.js'
import navBar from './nav-bar.js';

export default {
    components: {
        mailApp,
        keepApp,
        navBar
    },
    
    template: `
            <section class="home-page">
            <h1>home-page</h1>
            <nav-bar></nav-bar>
            <!-- <keep-app></keep-app> -->
            
            </section>
            `,

}

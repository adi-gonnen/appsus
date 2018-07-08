
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
                <header >
                    <h1 class="h-logo"><span class="logo-char">A</span>ppSus</h1>
                </header>
                <section>
                    <nav>
                        <ul class="nav-bar flex align-center">
                            <li @click="goEmailApp">Email</li>
                            <li @click="goKeepApp">Keeper</li>
                        </ul>
                    </nav>
                </section>
                <main class="main-container">
                    <div class="call-app">Everything you need in one package.</div>
                    <div class="images-container flex align-end">
                        
                        <div class="email-img-container flex column">
                            <img class="email-img" src="./img/email-pres.jpg">
                            <h2>Connect</h2>
                            <h4>Reach your colleagues where ever they are.</h4>
                        </div>
                        <div class="keeper-img-container flex column">
                            <img class="keeper-img" src="./img/keeper-pres.jpg">
                            <h2>Create</h2>
                            <h4>Every thing you need to bring your project to life.</h4>
                        </div>
                    </div>
                </main>
            </section>
            `,
            methods: {
                goEmailApp() {
                    this.$router.push('/mail')
                },
                goKeepApp() {
                    this.$router.push('/keep')
                }
            }
}

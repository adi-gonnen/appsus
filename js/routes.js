import homePage from './pages/home-page.js'
import mailApp from './pages/mail-app.js'
// import emailDetails from './cmps/mail/email-details-cmp.js'
import keepApp from './pages/keep-app.js'


export default [

    // Home Page --------------
    {path: '/', component: homePage},

    // Email App -------------- 
    {path: '/mail/:mailId', component: mailApp},
    {path: '/mail', component: mailApp},


    // Keep App -------------- 
    {path: '/keep', component: keepApp},
]
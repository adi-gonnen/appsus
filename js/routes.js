import homePage from './pages/home-page.js'
import mailApp from './pages/mail-app.js'
import keepApp from './pages/keep-app.js'


export default [
    {path: '/', component: homePage},
    // {path: '/about', component: about},
    {path: '/mail', component: mailApp},
    {path: '/keep', component: keepApp},
]
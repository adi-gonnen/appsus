import homePage from './cmps/general/home-page-cmp.js'
import mailApp from './cmps/mail/mail-app-cmp.js'
import keepApp from './cmps/keep/keep-app-cmp.js'


export default [
    {path: '/', component: homePage},
    // {path: '/about', component: about},
    {path: '/mail', component: mailApp},
    {path: '/keep', component: keepApp},
]
import homePage from './pages/home-page.js'
import mailApp from './pages/mail-app.js'
// import emailDetails from './cmps/mail/email-details-cmp.js'
import keepApp from './pages/keep-app.js'
import addNote from './cmps/keep/add-note/add-note-cmp.js'


export default [

    // Home Page --------------
    {path: '/', component: homePage},

    // Email App -------------- 
    {path: '/mail/:mailId', component: mailApp},
    // {path: '/mail/:mailId', component: bookDetails},
    {path: '/mail', component: mailApp},


    // Keep App -------------- 
    {path: '/keep', component: keepApp},
    // {path: '/keep/add-note/:note.id?', component: addNote},

]
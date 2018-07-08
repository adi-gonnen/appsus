console.log('sprint3');

import homePage from './pages/home-page.js'
import myRoutes from './routes.js'



Vue.use(VueRouter);
const myRouter = new VueRouter({routes: myRoutes})


new Vue ({
    router: myRouter,
    el: '#app',
    
    components: {
        homePage,
    }
})


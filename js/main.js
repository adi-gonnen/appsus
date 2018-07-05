console.log('sprint3');

import homePage from './cmps/general/home-page-cmp.js'
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


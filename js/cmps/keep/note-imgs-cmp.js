import imgService from '../../service/keep/img-service.js';


export default {
    template: `
            <section class="keep-img">
                <div v-for="img in imgs" class="img-container column flex">
                    <h5>{{img.title}}</h5>
                    <img v-bind:src="img.url" v-bind:title="img.url"
                        class="note-img">
                    </img>
                </div>
            </section>
            `,
    data() {
        return {
            imgs: imgService.query()
        }
    },
}
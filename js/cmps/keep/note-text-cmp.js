
import textService from '../../service/keep/text-service.js';

export default {
    template: `
            <section class="keep-text">
                <div v-for="text in texts" class="text-container column flex">
                    <div class="text-title">{{text.title}}</div>
                    <div>{{text.body}}</div>
                </div>
            </section>
            `, 
    data() {
        return {
            texts: textService.query()
        }
    },
    methodes: {
        loadTexts() {
            
        }
    }
}
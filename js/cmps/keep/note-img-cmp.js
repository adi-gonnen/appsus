import keepService from '../../service/keep-service.js';

export default {
    props: ['id', 'data'],
      template: `
            <section class="keep-img">
                <div class="img-container column flex">
                    <div class="btns">
                        <button class="btn btn-pin">pin</button>
                        <button class="btn btn-delete" @click="deleteNote">delete</button>
                        <button class="btn btn-edit">edit</button>
                    </div>
                    <div class="title">{{data.title}}</div>
                    <img v-bind:src="data.url" v-bind:title="data.url">       
                    </img>
                </div>
            </section>
            `,
            methods: {
                deleteNote() {
                    console.log(this.id);
                    
                    var id = this.id
                    keepService.removeNote(id);
                    console.log('id:::', id);
                    
                }
        
            }
    
}

//check hot to pass img
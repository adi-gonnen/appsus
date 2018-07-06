

export default {
    props: ['title', 'data'],
      template: `
            <section class="keep-img">
                <div class="img-container column flex">
                    <div class="title">{{title}}</div>
                    <img v-bind:src="data.url" v-bind:title="data.url">       
                    </img>
                </div>
            </section>
            `
    
}

//check hot to pass img
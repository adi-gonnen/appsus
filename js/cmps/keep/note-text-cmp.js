

export default {
    props: ['title', 'data'],
      template: `
            <section class="keep-text">
                <div class="text-container column flex">
                    <div class="title">{{title}}</div>
                    <div class="text-body">{{data.text}}</div>

                </div>
            </section>
            `
}
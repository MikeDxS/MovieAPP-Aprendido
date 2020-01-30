let DirectiveOnce = {
    template: `<div>
                <h1 v-text="title" v-once></h1>
                </div>`,
    data (){
        return {
            title: 'Directiva v-once',
        }
    }
}
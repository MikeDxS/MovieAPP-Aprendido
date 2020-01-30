let DirectivePre = {
    template: `<div>
                <h1 v-text="title"></h1>
                <p v-html="message"></p>
                </div>`,
    data (){
        return {
            title: 'Directiva v-pre',
            message: '<b>Hola desde diectiva v-pre</b>',
        }
    }
}
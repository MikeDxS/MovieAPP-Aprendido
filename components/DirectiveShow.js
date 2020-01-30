let DirectiveShow = {
    template: `<div>
                <h1 v-text="title"></h1>
                <p v-show="mostrar" v-html="message"></p>
                <p v-show="!user.permission">El usuario no tiene permiso :'3</p>
                </div>`,
    data (){
        return {
            title: 'Directiva v-show',
            message: '<b>Hola desde diectiva v-show</b>',
            mostrar: true,
            user: {
                permission: false,
            }
        }
    }
}
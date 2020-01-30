let DirectiveIf = {
    template: `<div>
                <h1 v-text="title"></h1>
                <p v-if="mostrar" v-html="message"></p>
                <p v-if="user.permission">El usuario tiene permiso :3</p>
                <p v-else-if="user.vip">El usuario es vip o_O</p>
                <p v-else>El usuario no tiene permiso :'3</p>
                </div>`,
    data (){
        return {
            title: 'Directiva v-if',
            message: '<b>Hola desde diectiva v-if</b>',
            mostrar: true,
            user: {
                permission: false,
                vip: true,
            }
        }
    }
}
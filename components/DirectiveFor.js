let DirectiveFor = {
    template: `<div>
                <h1 v-text="title"></h1>
                <p v-html="message"></p>
                <h3>Lista de un array</h3>
                <ul>
                    <li v-for="(color,index) in list" :key="index" v-text="color"></li>
                </ul>
                <h3>Lista de un objeto</h3>
                <ul>
                    <li v-for="(item,key,index) in object_list" :key="index">
                        {{key}}:{{item}}
                    </li>
                </ul>
                <h3>Lista de un array con objetos</h3>
                <ul>
                    <li v-for="(item,index) in other_list">
                        Nombre: {{item.nombre}}<br/>
                        Apellido: {{item.apellido}}<br/>
                        Nick: {{item.nickname}}<br/>
                    </li>
                </ul>
                </div>`,
    data (){
        return {
            title: 'Directiva v-for',
            message: '<b>Hola desde diectiva v-for</b>',
            list: ['Rojo','Amarillo','Azul','Purpura','Rosa'],
            object_list: {
                "nombre": "Mike",
                "apellido":"Suarez",
                "nickname":"mikes"
            },
            other_list:[{
                "nombre": "Mike",
                "apellido":"Suarez",
                "nickname":"mikes"
            },{
                "nombre": "Daniel",
                "apellido":"Suarez",
                "nickname":"Darez"
            }]
        }
    }
}
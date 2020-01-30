let saludarComp={
    template: `<header @click="upps">
                    <h1 v-text="titulo"></h1>
                    <button @click.stop="saludar">saludar</button>
                </header>`,
    data (){
        return {
            titulo: 'Saludo para ti',
            nombre: 'Michael',
            pais: 'Colombia',
            clickAfuera: 'No hagas click en el boton'
        }
    },
    methods: {
        upps(){
            alert(this.clickAfuera);
        },
        saludar(){
            alert(`Hola mi nombre es ${this.nombre} y soy de ${this.pais}`);
        }
    }
}
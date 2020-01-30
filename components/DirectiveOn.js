let DirectiveOn = {
    template: `<header>
                    <h1 v-text="title"></h1>
                    <h3 v-text="message"></h3>
                    <button @click.stop="comprarBoleta">Comprar boleta</button>diponibles <span v-text="entradas"></span>
                    <div>
                        <h1>Modificando Vista y modelo</h1>
                        <input type="text" :value="textInput" @keyup="updateDataTextInput"/>
                    </div>
                </header>`,
    data (){
        return {
            title: 'Directiva v-on',
            message: 'Que se dice',
            welcome_text: 'bienvenido desde aca',
            pelicula: 'Dora la exploradora',
            entradas: 5,
            textInput: 'Valor por defecto del input text'
        }
    },
    methods: {
        decirHola: function(){
            return alert('Holi linduras :v');
        },
        comprarBoleta (){
            if(this.entradas>0){
                this.entradas--;
                return alert(`entrada para ${this.pelicula} comprada`);
            }
            return alert('GG');
        },
        updateDataTextInput(event){
            this.textInput = event.target.value;
        }
    }
}
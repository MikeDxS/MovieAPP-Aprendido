let DirectiveSlot = {
    template: `<div>
                <h1 v-text="title"></h1>
                <p v-html="message"></p>
                <button-comp>
                    <template #action>
                        Dar Click
                    </template>
                    <template #element>
                        Modal
                    </template>
                </button-comp>
                </div>`,
    data (){
        return {
            title: 'Directiva v-slot',
            message: '<b>Hola desde diectiva v-slot</b>',
        }
    },
    components: {
        buttonComp
    }
}
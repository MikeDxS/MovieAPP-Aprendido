Vue.component('computed-properties-get-set', {
    template: `<div>
                    <h1>Computed Properties con Getter y Setter</h1>
                    <p>{{fullName}}</p>
                    <p>La edad es: {{userAge}} años</p>
                </div>`,
    data (){
        return {
            user: {
                name: 'Michael',
                lastname: 'Suarez',
                year: '1996'
            }
        }
    },
    computed: {
        fullName: {
            get(){
                return `${this.user.name} ${this.user.lastname}`;
            },
            set(newValue){
                let name = newValue.split(' ');
                this.user.name = name[0]
                this.user.lastname = name[1]
            }
        },
        userAge(){
            let date = new Date();
            let currentYear = date.getFullYear();
            return currentYear - Number(this.user.year);
        }
    }
})
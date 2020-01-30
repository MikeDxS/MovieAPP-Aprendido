Vue.component('computed-properties', {
    template: `<div>
                    <h1>Computed Properties</h1>
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
        fullName(){
            return `${this.user.name} ${this.user.lastname}`;
        },
        userAge(){
            let date = new Date();
            let currentYear = date.getFullYear();
            return currentYear - Number(this.user.year);
        }
    }
})
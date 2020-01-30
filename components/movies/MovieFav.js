let MovieFav = {
    template: `<div v-show="show" class="movieFav-wrapper">
                    <div :id="'fav-'+_uid" class="movieFav">
                    </div>
                </div>`,
    data() {
        return {
            message: 'Hola soy el mensaje de VueFav'
        }
    },
    props:{
        show: {
            type: Boolean,
            default(){
                return false
            }
        }
    },
    beforeUpdate() {
        console.log('Antes de que se crea');
    },
    created() {
        console.log('Creado');
    },
    beforeMount() {
        console.log('Antes de que se monte');
    },
    mounted() {
        let vm = this;
        console.log('Montado');
        let $element = document.getElementById('fav-'+this._uid);
        $element.addEventListener('animationend',function(){
            //vm.$emit('hideFav',false)
            vm.$emit('update:show',false);
        })
    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeDestroy() {
        console.log('Antes de destruirse');
    },
    destroyed() {
        console.log('destruido');
    },
    methods: {
        showMessage(){
            alert(this.message);
        }
    },
}
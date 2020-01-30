let MovieComp = {
    template: `<div :id="id | formatId" class="card" :class="{'movie-like': like}">
                    <img :src="cover | coverURL" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{title | uppercase }}</h5>
                        <p class="card-text">{{sinopsis | reducir}}</p>
                        <button class="btn" :class="btnStatus" @click="toggleLike">
                            <span v-text="like ? 'Favorita' : 'Agregar a favoritas'"></span>
                            <i class="far fa-heart" :class="{'far': !like, 'fas': like}"></i>
                        </button>
                        <router-link :to="{name: 'pelicula', params: {id}}" class="btn btn-primary">Detalle</router-link>
                    </div>
                </div>`,
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        sinopsis: {
            type: String,
            default: 'No posee sinopsis'
        },
        cover: {
            type: String,
            required: true
        },
        like: {
            type: Boolean,
            required: true,
            default (){
                return false;
            }
        }
    },
    filters: {
        formatId(value){
            return `movieCard-${value}`;
        },
        uppercase(value){
            return value.toUpperCase();
        },
        reverse(value){
            let word = value.split('');
            return word.reverse().join('');
        },
        reducir(value){
            /*let words = value.split('');
            let sino = "";
            for (let i = 0; i < 40; i++) {
                sino += words[i];
            }
            sino +="...";*/
            let sino = value.substring(0,100)+'...';
            return sino;
        }
    },
    data() {
        return {
            className: {
                'btn-like': true,
                'btn-ligh': false
            },
            classNem2: 'btn-like2'
        }
    },
    watch: {
        like(newVal, oldVal){
            console.log(newVal, oldVal);
        }
    },
    computed: {
        btnStatus(){
            return this.like ? 'btn-like' : 'btn-light'
        }
    },
    methods: {
        toggleLike(){
            //this.like = !this.like;
            let data = {
                id: this.id,
                like: !this.like
            }
            let movie = this.$parent.movies.find(m => m.id==this.id);
            movie.like = !this.like;
            this.$parent.showLike=!this.like;
            //this.$parent.sayHello();
            //this.$emit('toggleLike',data)
        }
    }
}
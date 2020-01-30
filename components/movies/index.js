let MovieApp=Vue.component('movie-app',{
    template: `<div class="container">
                    <h5>Bienvenido {{user.name}} {{user.lastName}}</h5>
                    <SearchComp ref="searchComp" v-model="searchMovies"/>
                    <div v-show="!Object.keys(searchMovies).length">
                        <h1>Peliculas App</h1>
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-4 py-3" v-for="(movie, key) in movies">
                                <MovieComp :ref="'movie-'+movie.id"  
                                :key="key"
                                :id="movie.id"
                                :title="movie.title" 
                                :sinopsis="movie.overview" 
                                :cover="movie.poster_path"
                                :like="movie.like"
                                @toggleLike='onToggleLike'
                                />
                            </div>
                        </div>
                        <div class="row">
                            <button @click="setPage(n)" class="btn m-1" :class="{
                                'btn-light': n!= page,
                                'btn-primary': n == page
                            }" v-for="(n, index) in total_pages" :key="index">{{n}}</button>
                        </div>
                    </div>
                    <div v-show="Object.keys(searchMovies).length">
                        <h1>Resultados de busqueda</h1>
                        <div class="row">                            
                            <div class="col-12 col-md-6 col-lg-4 py-3" v-for="(movie, key) in searchMovies.results">
                                <MovieComp :ref="'movie-'+movie.id"  
                                :key="key"
                                v-if="movie.poster_path"
                                :id="movie.id"
                                :title="movie.title" 
                                :sinopsis="movie.overview" 
                                :cover="movie.poster_path"
                                :like="movie.like"
                                @toggleLike='onToggleLike'
                                />
                            </div>
                        </div>
                        <div class="row">
                            <button @click="$refs.searchComp.setPage(n)" class="btn m-1" :class="{
                                'btn-light': n!= searchMovies.page,
                                'btn-primary': n == searchMovies.page
                            }" v-for="(n, index) in searchMovies.total_pages" :key="index">{{n}}</button>
                        </div>
                    </div>
                    <MovieFav ref="movieFav" :show.sync="showLike"/>
                </div>`,
    data(){
        return {
            user: {
                name: 'Michael',
                lastName: 'Suarez'
            },
            searchMovies:{},
            oldUser: null,
            movies: [],
            showLike: false,
            page: 1,
            total_pages: null
        }
    },
    components: {
        MovieComp,
        MovieFav,
        SearchComp
    },
    methods: {
        onToggleLike(data){
            let movieLike = this.movies.find(movie => movie.id==data.id);
            movieLike.like = data.like;
            //this.showLike = data.like;
        },
        getPopularMovies(){
            const URL = `${baseURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${this.page}&language=es-mx`;
            fetch(URL)
            .then(response => response.json())
            .then(({results, page, total_pages}) => {
                console.log(page, total_pages);
                this.total_pages = total_pages;
                this.movies = results.map(m =>{
                    m.like = false;
                    return m;
                });
            })
        },
        saludar(name){
            console.log('hola',name);
        },
        setPage(page){
            this.page = page;
            this.getPopularMovies();
        },
    },
    mounted() {
        let locationURL = new URL(window.location.href);
        this.page = locationURL.searchParams.get('page');
        this.getPopularMovies();
    },
})
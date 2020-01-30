let DirectiveModel = {
    template: `<div>
                <h1 v-text="title"></h1>
                <p v-show="mostrar" v-html="message"></p>
                <input type="text" v-model="inputText">
                <h2>Tipo checkbox</h2>
                <label>
                    <input type="checkbox" v-model="checked">
                    Activado
                </label>
                <h2>Peliculas</h2>
                <label v-for="(movie,key) in movies" :key="key">
                    <input :value="movie" type="checkbox" v-model="favoriteMovies">
                    {{movie}}
                </label>
                <div v-show="favoriteMovies.length > 0">
                    <h2>Peliculas favoritas</h2>
                    <ul>
                        <li v-for="(pelicula,key) in favoriteMovies" :key="key">
                            {{pelicula}}
                        </li>
                    </ul>
                </div>
                </div>`,
    data (){
        return {
            title: 'Directiva v-model',
            message: '<b>Hola desde diectiva v-model</b>',
            mostrar: true,
            inputText: 'Data del input',
            checked: false,
            favoriteMovies: [],
            movies: ['Buscando a Nemo','Titanic','Toy Story'],
            peliculita: false
        }
    }
}
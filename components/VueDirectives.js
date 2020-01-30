Vue.component('vue-directives',{
    template: `<div>
                <h1 v-text="title"></h1>
                <h2 v-text="text"></h2>
                <a v-bind:href="link.href" :title="link.title" v-text="link.text"></a>
                <DirectiveHtml/>
                <DirectiveShow/>
                <DirectiveIf/>
                <DirectiveFor/>
                <DirectiveOn/>
                <DirectiveModel/>
                <DirectiveSlot/>
                <DirectivePre/>
                <DirectiveOnce/>
                <saludarComp/>
                </div>`,
    data (){
        return {
            title: 'Directivas de Vue.js',
            text: 'Texto de prueba v-text',
            link: {
                text: 'VueJS Home',
                href: 'http://vuels.org',
                title: 'Documentacion VueJS'
            }
        }
    },
    components: {
        DirectiveHtml,
        DirectiveShow,
        DirectiveIf,
        DirectiveFor,
        DirectiveOn,
        DirectiveModel,
        DirectiveSlot,
        DirectivePre,
        DirectiveOnce,
        saludarComp
    }
})
<template>
    <v-container class='borda main-container sm-pa-8 align-start' fill-height> 
        <v-row wrap class='elevation-16 flex-sm-row-reverse'> 

            <v-col class='profile-column px-0 pt-0 pb-3 col-12 col-sm-3' >
                <v-container class='general-profile pb-2'>
                    <v-container class='pa-4 mb-2'>
                        <v-img 
                        src='./../assets/mypic-avatar.jpg'
                        contain
                        class='avatar-img mx-auto'/>
                    </v-container>

                    <p style='text-align:center' class='white--text mb-0 text-h4 text-sm-h5 font-weight-black'> {{infoPerfil.nome}}</p>
                    <p style='text-align:center' class='grey--text text--lighten-2 text-subtitle-2'> {{infoPerfil.profissao}}</p>
                                        
                </v-container>

                <v-container id='socialMedia'
                    class='borda mt-1 pa-2'>
                    <ul class='borda'> 
                        <li v-for="(items, index) in socialMedia.descricao" 
                            :key='index'
                            class='borda white--text'> 
                            <v-icon small color='white'>{{socialMedia.icone[index]}} </v-icon>
                            {{items}} 
                            
                        </li>
                    </ul>
                </v-container>

                <v-container id='educação'
                    class='borda mt-1 pa-2'>

                    <p class='topic-column white--text text-subtitle-1 mb-0 font-weight-bold'>EDUCAÇÃO </p>
                    <p class='grey--text text--lighten-2 topic-column mb-1'>Universidade Federal Fluminense</p>
                </v-container>

                <v-container id='idiomas'
                    class='borda pa-2'>

                    <p class='topic-column text-h5 font-weight-bold mb-0 text-subtitle-1'> 
                        {{idiomas.titulo}} 
                    </p>
                    <ul class='borda'> 
                        <li v-for="(items, index) in idiomas.descricao" 
                            :key='index'
                            class='borda white--text'> 
                            {{items.idioma}} <span class='grey--text text--lighten-2 text-caption'>({{items.nivel}})</span> 
                        </li> 
                    </ul>
                </v-container>

                <v-container id='interesses'
                    class='borda mt-1 pa-2'>

                    <p class='topic-column text-h5 mb-0 text-subtitle-1 font-weight-bold'>{{interesses.titulo}}</p>
                    <ul class='borda'> 
                        <li v-for="(items, index) in interesses.descricao" 
                            :key='index'
                            class='borda white--text'> 
                            {{items}} 
                        </li>
                    </ul>
                </v-container>
            </v-col>

            <v-col class='grey lighten-4 col-12 col-sm-9 pa-0 sm-pa-12'>

                <v-container class=''>
                    <v-container>
                        <p class='primary--text text-h5 mb-0' >{{carreira[0].titulo}} </p>
                        <p class='text-body-2'>{{carreira[0].descricao}} </p>
                    </v-container>
                    <v-container>
                        <p class='primary--text text-h5 mb-0' >{{carreira[1].titulo}} </p>
                        <p class='text-subtitle-2 mt-2 mb-0' >{{carreira[1].tipo}} </p>
                        <p class='text-body-2 mt-2'>{{carreira[1].descricao}} </p>
                    </v-container>
                    <v-container>
                        <p class='primary--text text-h5 mb-0' >{{carreira[2].titulo}} </p>
                        <p class='text-body-2 mt-2'>{{carreira[2].descricao}} </p>
                        <ul>
                            <li> 
                                <p class='text-body-2 mt-2' @click="proMental()">
                                    <a> ProMental <span class='orange--text text--lighten-2 text-caption'>(em desenvolvimento)</span></a>
                                </p>
                            </li>                    
                        </ul>
                    </v-container>
                    <v-container>
                        <p class='primary--text text-h5 mb-0' >{{carreira[3].titulo}} </p>
                            <template v-for="(chips, index) in salgadinhoDeLinguagens">
                                <v-chip
                                class="ma-2"
                                :color="chips.cor"
                                text-color="white"
                                :key='index'>
                                    <v-avatar left>
                                        <v-img :src="require(`./../assets/iconsLinguagem/${chips.icone}`)"></v-img>
                                    </v-avatar>

                                    {{chips.linguagem}}
                                </v-chip>
                            </template>
                    </v-container>
                </v-container>


            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        socialMedia: {
            titulo: 'CONTATO',
            descricao: ['igorbm@id.uff.br', '+55 021 97685-4058'],
            icone: ['mdi-email', 'mdi-phone']
        },
        idiomas: {
            titulo: 'IDIOMAS',
            descricao: [{idioma: 'Portugues', nivel:'Nativo' }, {idioma: 'Ingles', nivel:'Intermediario' }],
            nivel: ['Nativo', 'Intermediario']
        },
        interesses: {
            titulo: 'INTERESSES',
            descricao: ['Computação', 'Física', 'Mercado Financeiro', 'Piano', 'Violão']
        },

        carreira: [
            {icone: 'mdi-account' ,titulo: 'Sobre', descricao: `Com 22 anos, sou um Desenvolvedor Web, no qual se diverte ao ver suas aplicações tomando vida. 
            Como pessoa, custumo ser bem curioso e passo horas pesquisando sobre os assuntos de interesse, buscando conhecer e aprender o máximo que posso.
            Como profissional, gosto de cumprir com seriedade as tarefas que me são confiadas e estou sempre buscando o melhor para a empresa em que trabalho.`},
            {
                icone: 'mdi-account',
                titulo: 'Experiências', 
                tipo: 'Desenvolvimento Mobile', 
                descricao: 'Atualmente faço parte de um projeto de Iniciação Científica, o qual possui o propósito de criar aplicações voltadas a área da saúde. Nesse projeto, trabalho com Html, CSS, Javascript e VueJS.'
            },
            {icone: 'mdi-account', titulo: 'Projetos', descricao: 'Alguns dos projetos em que tive a oportunidade de trabalhar.'},
            {icone: 'mdi-account', titulo: 'Habilidades', descricao: ''}
        ],
        salgadinhoDeLinguagens: [
            {linguagem:'JavaScript', icone:'js-icon.svg', cor:'yellow darken-2'},
            {linguagem:'JQuery', icone:'jquery-icon.svg', cor:'blue accent-1'},
            {linguagem:'NodeJs', icone:'node-icon.svg', cor:'green darken-1'},
            {linguagem:'HTML5', icone:'icon-html.svg', cor:'deep-orange accent-2'},
            {linguagem:'CSS3', icone:'icon-css3.svg', cor:'blue accent-2'},
            {linguagem:'VueJs', icone:'vue-icon.svg', cor:'teal accent-3'},
            {linguagem:'C', icone:'c-icon.svg', cor:'light-blue darken-2'},
            {linguagem:'Java', icone:'java-icon.svg', cor:'blue-grey lighten-4'},
        
        ],

        infoPerfil: { nome: 'Igor Meirelles', profissao: 'Desenvolvedor Web'}
    }),
    methods: {
        proMental() {
            //window.location.href = ""
        }
    }
}
</script>
<style scoped>

ul{
    list-style: none;
    padding:0 0 0 16px;
}
li{
    text-align: left;
    margin: 4px 0;
}
a{
    text-decoration: none;
}
.borda{
    /* border:1px solid black; */
}
.main-container{
    width:  100%;
    height: 100%;
}
.general-profile{
    background-color: #4b7bec;
}
.avatar-img{
    border-radius:100%;
    margin: auto auto;
    width:  60%;
    height: 60%;
}

.profile-column{
    /* padding-bottom:12px; */
    background-color: #4D7EF0;
}
.topic-column{
    padding-left: 16px;
    text-align: left;
    color: white;
}

</style>
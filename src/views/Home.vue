<template>
  <v-container
    class="borda main-container sm-pa-8 pa-0 align-start"
    fill-height
  >
    <v-row wrap class="elevation-2 flex-sm-row-reverse mt-sm-4">
      <v-col class="overflow px-0 pt-0 pb-3 col-12 col-sm-3">
        <v-container class="general-profile pb-2">
          <v-container class="pa-4 mb-2">
            <v-img
              src="./../assets/mypic-avatar.jpg"
              contain
              class="avatar-img mx-auto"
            />
          </v-container>

          <p
            style="text-align: center"
            class="white--text mb-0 text-h4 text-sm-h5 font-weight-black"
          >
            {{ infoPerfil.nome }}
          </p>
          <p
            style="text-align: center"
            class="grey--text text--lighten-2 text-subtitle-2"
          >
            {{ infoPerfil.profissao }}
          </p>
        </v-container>

        <v-container class="borda mt-1 pa-2 socialMedia">
          <ul class="borda">
            <template v-for="(items, index) in contatos.formas">
              <li
                v-if="!items.links"
                :key="index"
                :contato="items.icone"
                class="borda white--text"
              >
                <v-icon small color="white"> {{ items.icone }} </v-icon>
                {{ items.descricao }}
              </li>
              <li v-else :key="index">
                <a class="link_profile" :href="items.links" target="_blank">
                  <v-icon small color="white"> {{ items.icone }} </v-icon>
                  {{ items.descricao }}
                </a>
              </li>
            </template>
          </ul>
        </v-container>

        <v-container id="educação" class="borda mt-1 pa-2">
          <p
            class="
              topic-column
              white--text
              text-subtitle-1
              mb-0
              font-weight-bold
            "
          >
            EDUCAÇÃO
          </p>
          <p class="grey--text text--lighten-2 topic-column mb-1">
            Universidade Federal Fluminense
          </p>
        </v-container>

        <v-container id="idiomas" class="borda pa-2">
          <p class="topic-column text-h5 font-weight-bold mb-0 text-subtitle-1">
            {{ idiomas.titulo }}
          </p>
          <ul class="borda">
            <li
              v-for="(items, index) in idiomas.descricao"
              :key="index"
              class="borda white--text"
            >
              {{ items.idioma }}
              <span class="grey--text text--lighten-2 text-caption">
                ({{ items.nivel }})
              </span>
            </li>
          </ul>
        </v-container>

        <v-container id="interesses" class="borda mt-1 pa-2">
          <p class="topic-column text-h5 mb-0 text-subtitle-1 font-weight-bold">
            {{ interesses.titulo }}
          </p>
          <ul class="borda">
            <li
              v-for="(items, index) in interesses.descricao"
              :key="index"
              class="borda white--text"
            >
              {{ items }}
            </li>
          </ul>
        </v-container>
      </v-col>

      <v-col class="grey overflow lighten-4 col-12 col-sm-9 pa-0 sm-pa-12">
        <v-container class="">
          <v-container>
            <p class="primary--text text-h5 mb-0">
              {{ carreira.sobre.titulo }}
            </p>
            <p class="text-body-2">{{ carreira.sobre.descricao }}</p>
          </v-container>
          <v-container>
            <p class="primary--text text-h5 mb-0">{{ carreira.exp.titulo }}</p>
            <template v-for="(exp, index) in carreira.exp.colaboracoes">
              <p
                class="text-subtitle-2 mt-2 mb-0 font-weight-medium"
                :key="`${index}-1`"
              >
                {{ exp.titulo }}
              </p>
              <p class="text-body-2 mt-2" :key="`${index}-2`">
                {{ exp.descricao }}
              </p>
            </template>
          </v-container>
          <v-container>
            <p class="primary--text text-h5 mb-0">
              {{ carreira.projetos.titulo }}
            </p>
            <p class="text-body-2 mt-2">{{ carreira.projetos.descricao }}</p>
            <ul>
              <li>
                <a href="https://pensu-promental.web.app/#/" target="_blank">
                  <p class="text-body-2 mt-2">
                    ProMental
                    <span class="orange--text text--lighten-2 text-caption">
                      (em desenvolvimento)
                    </span>
                  </p>
                </a>
              </li>
            </ul>
          </v-container>
          <v-container>
            <p class="primary--text text-h5 mb-0">
              {{ carreira.skils.titulo }}
            </p>
            <template
              v-for="(salgadinho, index) in carreira.skils
                .salgadinhoDeLinguagens"
            >
              <v-chip
                class="ma-2"
                :color="salgadinho.cor"
                text-color="white"
                :key="index"
              >
                <v-avatar left>
                  <v-img
                    :src="
                      require(`./../assets/iconsLinguagem/${salgadinho.icone}`)
                    "
                  ></v-img>
                </v-avatar>

                {{ salgadinho.linguagem }}
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
    contatos: {
      titulo: "CONTATO",
      formas: [
        {
          descricao: "igorbm@id.uff.br",
          icone: "mdi-email",
          links: "",
        },
        {
          descricao: "+55 021 97685-4058",
          icone: "mdi-phone",
          links: "",
        },
        {
          descricao: "ibarretom",
          icone: "fab fa-github",
          links: "https://github.com/ibarretom",
        },
      ],
    },

    idiomas: {
      titulo: "IDIOMAS",
      descricao: [
        { idioma: "Portugues", nivel: "Nativo" },
        { idioma: "Ingles", nivel: "Intermediario" },
      ],
      nivel: ["Nativo", "Intermediario"],
    },

    interesses: {
      titulo: "INTERESSES",
      descricao: [
        "Computação",
        "Física",
        "Mercado Financeiro",
        "Piano",
        "Violão",
      ],
    },

    carreira: {
      sobre: {
        icone: "mdi-account",
        titulo: "Sobre",
        descricao: `Com 22 anos, sou um Desenvolvedor Web, no qual se diverte ao ver suas aplicações tomando vida. 
            Como pessoa, custumo ser bem curioso e passo horas pesquisando sobre os assuntos de interesse, buscando conhecer e aprender o máximo que posso.
            Como profissional, gosto de cumprir com seriedade as tarefas que me são confiadas e estou sempre buscando o melhor para a empresa em que trabalho.`,
      },
      exp: {
        icone: "mdi-account",
        titulo: "Experiências",
        colaboracoes: [
          {
            titulo: "Pensu - Projeto de Ensino e Saúde na Universidade",
            tipo: "Desenvolvimento Mobile",
            descricao:
              "Atualmente faço parte de um projeto de Iniciação Científica, o qual possui o propósito de criar aplicações voltadas a área da saúde. Nesse projeto, trabalho com Html, CSS, Javascript e VueJS.",
          },
          {
            titulo: "Eletrofrigor",
            tipo: "Suporte de TI",
            descricao:
              "Durante 3 meses atuei como estagiário em suporte de TI, realizando: abertura de chamado e correções de bugs no ERP Millennium, gerenciamênto de rede e usuários e manutenção de computadores.",
          },
          {
            titulo: "Rede Globo de Televisão - Noesis",
            tipo: "Desenvolvimento Front-end",
            descricao:
              "Durante 4 meses trabalhei como Analista de desenvolvimento Jr. Durante este período atuei na criação e manutenção e de portais administrativos. Tive experiência com as linguagens HTML, CSS3 e Javascript além do framework Vuejs e o plugin Vuetify.",
          },
        ],
      },

      projetos: {
        icone: "mdi-account",
        titulo: "Projetos",
        descricao:
          "Alguns dos projetos em que tive a oportunidade de trabalhar.",
      },

      skils: {
        icone: "mdi-account",
        titulo: "Habilidades",
        descricao: "",
        salgadinhoDeLinguagens: [
          {
            linguagem: "JavaScript",
            icone: "js-icon.svg",
            cor: "yellow darken-2",
          },
          {
            linguagem: "JQuery",
            icone: "jquery-icon.svg",
            cor: "blue accent-1",
          },
          {
            linguagem: "NodeJs",
            icone: "node-icon.svg",
            cor: "green darken-1",
          },
          {
            linguagem: "HTML5",
            icone: "icon-html.svg",
            cor: "deep-orange accent-2",
          },
          { linguagem: "CSS3", icone: "icon-css3.svg", cor: "blue accent-2" },
          { linguagem: "VueJs", icone: "vue-icon.svg", cor: "teal accent-3" },
          { linguagem: "C", icone: "c-icon.svg", cor: "light-blue darken-2" },
          {
            linguagem: "Java",
            icone: "java-icon.svg",
            cor: "blue-grey lighten-4",
          },
        ],
      },
    },

    infoPerfil: {
      nome: "Igor Meirelles",
      profissao: "Desenvolvedor de Software",
    },
  }),
};
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0 0 0 16px;
}
li {
  text-align: left;
  margin: 4px 0;
}
li.socialMedia {
  cursor: pointer;
}
a {
  text-decoration: none;
}
.borda {
  /* border:1px solid black; */
}
.main-container {
  width: 100%;
  height: 100%;
}
.general-profile {
  background-color: #4b7bec;
}
.avatar-img {
  border-radius: 100%;
  margin: auto auto;
  width: 60%;
  height: 60%;
}
@media (min-width: 1024px) {
  .overflow {
    overflow: auto;
    height: 96vh;
  }
}
.overflow {
  /* padding-bottom:12px; */
  background-color: #4d7ef0;
}
.topic-column {
  padding-left: 16px;
  text-align: left;
  color: white;
}
a.link_profile {
  color: white;
}
</style>
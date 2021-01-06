module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: '/aboutme',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Igor Barreto - Bem Vindo ao meu Currículo'
        return args
      })
  }
}
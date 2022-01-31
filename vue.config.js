module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      "/api/": {
        target: "https://backend-for-vue.herokuapp.com/",
        secure: false,
        changeOrigin: true,
      },
    },
  },
}

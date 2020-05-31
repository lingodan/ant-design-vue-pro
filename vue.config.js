module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  // devServer: {
  //     proxy: {
  //         "/api": {
  //             target: "http://localhost:3080",
  //             changeOrigin : true,
  //             bypass: function (req, res) {
  //                 console.log("devServer:")
  //                 if (req.headers.accept.indexOf("html") !== -1) {
  //                     console.log("if")
  //                     return "/index.html"
  //                 } else if(process.env.MOCK !== 'none'){
  //                     console.log(process.path)
  //                     const name = req.path.split('/api/')[1].split("/").join("_")
  //                     const mock = require(`./mock/${name}`);
  //                     const result = mock(req.method)
  //                     delete require.cache[require.resolve(`./mock/${name}`)]
  //                     return res.send(result)
  //                 }
  //             }
  //         }
  //     }
  // }

  devServer: {
    // open: true,
    // host: 'localhost',
    // port: 8080,
    // https: false,
    proxy: {
      "/api": {
        target: "http://localhost:3080"
        // changeOrigin: true,
        // ws: true,
        // pathRewrite: {
        //     '^api': ''
        // }
        // bypass: function (req, res) {
        //     console.log("devServer:")
        //     if (req.headers.accept.indexOf("html") !== -1) {
        //         console.log("if")
        //         return "/index.html"
        //     } else if(process.env.MOCK !== 'none'){
        //         console.log(process.path)
        //         const name = req.path.split('/api/')[1].split("/").join("_")
        //         const mock = require(`./mock/${name}`);
        //         const result = mock(req.method)
        //         delete require.cache[require.resolve(`./mock/${name}`)]
        //         return res.send(result)
        //     }
        // }
      }
    }
  }
};

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // 按需引用 ==》https://www.antdv.com/docs/vue/introduce-cn/
  // 如果使用babel配置，需要手动按需引用
  //  安装模块 ==>cnpm i --save-dev babel-plugin-import ==> 安装到--save-dev空间下
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: "true" }
    ] // `style: true` 会加载 less 文件
  ]
};

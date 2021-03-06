module.exports = {
  presets: ["@vue/cli-plugin-babel/preset", "@vue/babel-preset-jsx"],
  // 按需引用 ==》https://www.antdv.com/docs/vue/introduce-cn/
  // 如果使用babel配置，需要手动按需引用
  //  安装模块 ==>cnpm i --save-dev babel-plugin-import ==> 安装到--save-dev空间下
  // 注意此处的libraryName要与Vue注入的的组件类型一致
  plugins: [
    ["import", { libraryName: "Antd", libraryDirectory: "es", style: "true" }] // `style: true` 会加载 less 文件
  ]
};

## 自定义配置webpack、babelrc

### TODO
1. 如何将菜单和路由相结合
2. 如何使用路由管理用户权限
3. 更加精细的权限设计
4. 如何使用Echart等其他第三方库



### 菜单与路由结合
参考Ant-Design-Vue/Navigator/Menu(导航菜单)<br/>
拷贝单文件导航递归菜单<br/>
````
使用单文件方式递归生成菜单。
因组件内部会动态更改a-sub-menu的属性，如果拆分成单文件，无法将属性挂载到a-sub-menu上，你需要自行声明属性并挂载。
为了方便，避免属性的声明，我们推荐使用函数式组件。
````
1. 根据ant-design-vue的配置引入组件后，然后调整页面布局。
2. 根据组件路由生成菜单 将router/index.js ==> Menu


权限组件/权限指令（v-auth）

### 使用ECharts图标插件
#### 安装Echarts
在 webpack 中使用 ECharts ```npm install echarts --save```

#### 组件的延迟加载/监听容器变化
使用后者方案：安装resize-detector ``` npm i --save resize-detector```
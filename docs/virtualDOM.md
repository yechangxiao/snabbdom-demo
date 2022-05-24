## 什么是Virtual DOM

- Virtual DOM(虚拟DOM)，是由普通的JS对象来描述DOM对象

## 为什么使用Virtual DOM

- 模板引擎可以简化视图操作，没法跟踪状态
- 虚拟DOM可以跟踪状态变化
- github上virtual-dom的动机描述
  - 虚拟DOM可以维护程序的状态，跟踪上一次的状态(以前的视图操作都是将所有状态都重新更新的)
  - 通过比较前后两次状态差异更新真实DOM

## 虚拟DOM的作用

- 维护视图和状态的关系
- 复杂视图情况下提升渲染性能
- 跨平台
  - 浏览器平台渲染DOM
  - 服务端渲染SSR
  - 原生应用(Weex/React Native)
  - 小程序
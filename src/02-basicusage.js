// 注意要写完整路径，因为package.json中的exports字段在webpack5才被支持
import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

const patch = init([])

let vnode = h('div#container', [
  h('h1', 'hello snabbdom'),
  h('p', '这是一个p标签')
])
let app = document.getElementById('app')

let oldVnode = patch(app, vnode)

setTimeout(() => {
  // vnode = h('div#container', [
  //   h('h1', 'hello world'),
  //   h('p', 'hello p')
  // ])
  // patch(oldVnode, vnode)

  // 清除div中的内容，替换为一个空的注释节点
  patch(oldVnode, h('!'))
}, 2000);




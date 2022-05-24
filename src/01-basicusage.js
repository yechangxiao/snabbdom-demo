// 注意要写完整路径，因为package.json中的exports字段在webpack5才被支持
import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

const patch = init([])

// 第一个参数：标签+选择器
// 第二个参数：如果是字符串就是标签中的文本内容
let vnode = h('div#container.cls', 'hello world')
let app = document.getElementById('app')

// 第一个参数：旧的VNode，也可以是DOM元素
// 第二个参数：新的VNode
// 返回新的VNode
let oldVnode = patch(app, vnode)

vnode = h('div#container.xxx', 'hello snabbdom')
patch(oldVnode, vnode)




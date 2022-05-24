// 注意要写完整路径，因为package.json中的exports字段在webpack5才被支持
import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

// 1. 导入模块
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'

// 2. 注册模块
const patch = init([
  styleModule,
  eventListenersModule
])

// 3. 使用h函数的第二个参数传入模块中使用的数据(对象)
let vnode = h('div', [
  h('h1', { style: { backgroundColor: 'red' } }, 'hello world'),
  h('p', { on: { click: eventHandler } }, '这是一个p标签')
])
function eventHandler() {
  console.log('点击了P标签')
}
let app = document.getElementById('app')

let oldVnode = patch(app, vnode)
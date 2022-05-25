// 注意要写完整路径，因为package.json中的exports字段在webpack5才被支持
import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

const patch = init([])


let vnode = h('ul', [
  h('li', { key: 'a' }, '首页'),
  h('li', { key: 'b' },'视频'),
  h('li', { key: 'c' },'微博')
])
let app = document.getElementById('app')
let oldVnode = patch(app, vnode)

vnode = h('ul', [
  h('li', { key: 'a' },'首页'),
  h('li', { key: 'c' },'微博'),
  h('li', { key: 'b' },'视频')
])
patch(oldVnode, vnode)




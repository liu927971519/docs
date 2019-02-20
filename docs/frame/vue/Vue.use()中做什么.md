---
title: Vue.use()中做什么
---

## Vue.use()作用
主要是用来在全局注册一个插件，使得该插件可以在全局直接使用，不需要再单独引入。

## Vue.use源码
``` javaScript
Vue.use = function (plugin) {
    // 忽略已注册插件
    if (plugin.installed) {
      return
    }

    // 集合转数组，并去除第一个参数
    var args = toArray(arguments, 1);

    // 把this（即Vue）添加到数组的第一个参数中
    args.unshift(this);

    // 调用install方法
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    // 注册成功
    plugin.installed = true;
    return this;
  };
```
 通过源码可知Vue.use()接收函数或者一个包含install属性的对象为参数，如果参数带有install就执行install, 如果没有就直接将参数当install执行, 第一个参数始终为vue对象, 注册过的插件不会重新注册。

## element ui如何使用Vue.use()来注册
``` javaScript
// 代码摘抄自element ui入口文件

实现上就是在install中执行了全局注册的操作

// index.js

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  ...
}

export default {
  version: '2.5.4',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
  ...
}

//  main.js
import ElementUI from 'element-ui'
Vue.use(ElementUI)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
```
从element ui入口文件中，我们可以知道在Vue.use()中若element ui没有注册过，则会调用element ui入口文件中
install方法来将各种组件注册到全局的Vue实例上，这样就可以在整个项目直接使用element ui提供组件，之后将element ui
标记为已经注册过的。

## 插件开发
通过上文的介绍，我们知道Vue.use()做什么，所以在Vue的插件开发中，Vue.js 的插件应该有一个公开方法 install。
这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：

``` javaScript
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

## 参考
[Vue 进阶系列（二）之插件原理及实现](https://github.com/yygmind/blog/issues/9)

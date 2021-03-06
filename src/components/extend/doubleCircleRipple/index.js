import VcDoubleCircleRipple from './VcDoubleCircleRipple.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcDoubleCircleRipple.name, VcDoubleCircleRipple)
}

export default plugin

export {
  VcDoubleCircleRipple,
  plugin as install
}

// Init
Vue.use(window['vue-validator'])
// suppress expression warnings
Vue.config.warnExpressionErrors = false

Vue.registerComponent = function component(id) {
  var id = $(id).map(function(index) {
    return "#" + this.id
  }).toArray()
  return id
}

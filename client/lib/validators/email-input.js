Template.emailInput.onRendered(function () {
  // Init
  Vue.use(window['vue-validator'])
  // suppress expression warnings
  Vue.config.warnExpressionErrors = false

  // Find the #id for each instance of this "component"
  var componentIds = $('.js-component__email-input').map(function(index) {
    return "#" + this.id;
  }).toArray();

  // Instantiate a new Vue instance per "component"
  componentIds.forEach(function(componentId) {
    new Vue({
      validator: {
        validates: {
          email: function (val) {
            return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
          }
        }
      },
      data: {
        email: '',
      }
    }).$mount(componentId)

  })
})
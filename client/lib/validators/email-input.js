Template.emailInput.onRendered(function () {
  // Instantiate a new Vue instance per "component"
  Vue.registerComponent('.js-component__email-input').forEach(function(componentId) {

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
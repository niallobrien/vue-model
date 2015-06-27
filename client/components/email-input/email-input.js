Template.emailInput.onRendered(function () {
  // Instantiate a new Vue instance per "component"
  Vue.registerComponent('.js-component__email-input').forEach(function(componentId) {

    new Vue({
      el: componentId,
      data: {
        email: '',
        message: '',
      }
    })
  })

})

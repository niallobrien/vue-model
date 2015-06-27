Template.emailInput.onRendered(function () {
  // Find the #id for each instance of this "component"
  var componentIds = $('.js-component__email-input').map(function(index) {
    return "#" + this.id
  }).toArray()

  // Instantiate a new Vue instance per "component"
  componentIds.forEach(function(componentId) {
    new Vue({
      el: componentId,
      data: {
        email: '',
        message: '',
      }
    })
  })

})

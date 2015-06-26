Template.emailInput.onRendered(function () {
  Vue.use(window['vue-validator'])

  // suppress expression warnings
  Vue.config.warnExpressionErrors = false

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
  }).$mount('.emailInput')
})
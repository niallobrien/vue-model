# VueModel
This is an example app showing how we can fake Vue components to use with Meteor. The implementation is not ideal, but it works. :)

We can include the same element or "component" multiple times, we just need to give each one a unique id.

```
{{> emailInput id="email-input"}}
{{> emailInput id="email-input2"}}

```
In the `emailInput` template we add a class to identify the component and set the id to the unique id passed when calling this template.

`<div class="js-component__email-input" id={{ id }}>`

We then need to loop through each component, get each id and bind a Vue instance to each one.

```
// Find the #id for each instance of this "component"
var componentIds = $('.js-component__email-input').map(function(index) {
  return "#" + this.id;
}).toArray();
```
Once we have the ids, we can then loop through them to instantiate a new Vue instance of this "component". 

```
  // Instantiate a new Vue instance per "component"
  componentIds.forEach(function(componentId) {
    new Vue({
      el: componentId,
      data: {
        ...
      }
    })
  })
```

To make this even easier, we can create an `init-vue.js` file under `/lib/` so the file is loaded before the rest of our client-side js.

```
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
```

If you add any custom validators to your components, you can place them under `/lib/validators` and name the validator file the same as the component files.
Register your validator like any other Vue instance.

```
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
```

![Directory & file structure example](http://i.imgur.com/dI4ZNRb.png)
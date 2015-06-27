# VueModel
This is an example app showing how we can fake Vue components to use with Meteor. The implementation is not ideal, but it works. :)

We can include the same element or "component" multiple times, we just need to give each one a unique id.

```
{{> emailInput id="email-input"}}
{{> emailInput id="email-input2"}}

```
In the `emailInput` template we add a class to identify the component and set the id to the unique id passed when calling this template.

`<div class="js-component__email-input" id={{ id }}>`

We then need to loop through each component and get its id.

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
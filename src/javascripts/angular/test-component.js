angular.module('storybook').component('test', {
  template: '<div>This is the Test Component</div>',
  controller: class {
    constructor() {
      console.log('creating test form')
    }
  },
})

injectComponent('test')

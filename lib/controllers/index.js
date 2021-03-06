// Dependencies
const fs = require('fs');
const path = require('path');

// Frameworks
const Backbone = require('backbone');
const template = require('ak-template');

// Controller
const Input = require('./input');
const List = require('./todo-list');


module.exports = Backbone.View.extend({
  template: template(fs.readFileSync(path.join(__dirname + '/view.tpl'), 'utf8')),
  el: '#app',
  

  /**
   * Render
   */
  render: function() {
    this.$el.html(this.template());
    const input = new Input();
    const list = new List();

    input.render();
    list.render();
     
    return this;
  }
});

// Dependencies
const fs = require('fs');
const path = require('path');

// Frameworks
const Backbone = require('backbone');
const template = require('ak-template');

module.exports = Backbone.View.extend({
  template: template(fs.readFileSync(path.join(__dirname + '/view.tpl'), 'utf8')),
  el: '#todo-list',
 
  /**
   * Render
   */
  render: function() {
  console.log('tata');
    this.$el.append(this.template());

    return this;
  }
});

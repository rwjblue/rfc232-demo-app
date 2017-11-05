import { module, test } from 'qunit';
import { setupRenderingTest, setupTest, render } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('helper:sad-color', function() {

  module('rendering tests', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
      await render(hbs`{{sad-color}}`);

      assert.equal(this.$().text().trim(), '#fff');
    });
  });

  module('unit tests', function(hooks) {
    setupTest(hooks);

    test('it returns black', async function(assert) {
      const subject = this.owner.lookup('helper:sad-color');

      assert.equal(subject.compute(), '#fff');
    });
  });
});

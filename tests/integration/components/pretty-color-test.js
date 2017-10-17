import { module, test } from 'qunit';
import { setupRenderingTest, render } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('component:pretty-color', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{pretty-color}}`);

    assert.equal(this.element.textContent, '#FF69B4');
  });
});

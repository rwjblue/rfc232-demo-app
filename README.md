# rfc232-demo-app

This app serves as a small test bed for using [emberjs/rfcs#232](https://github.com/emberjs/rfcs/blob/master/text/0232-simplify-qunit-testing-api.md) in ember-cli apps.

Following these steps allows us to use the new API:

```
ember new test-app
cd test-app
npm i --save-dev ember-cli-qunit@^4.1.0-beta.2
```

Boom, now you can write pretty tests like this:

```js
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
```

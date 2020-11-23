import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | title', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the proper title', async function (assert) {
    await render(hbs`<Title />`);

    assert.dom('nav').exists();
    assert.dom('nav').hasClass('title');
    assert.dom('h1').hasClass('title__main-title');
    assert.equal(
      this.element.textContent.trim(),
      'Animal Crossing: New Horizons Turnip Price Calculator',
    );
  });
});

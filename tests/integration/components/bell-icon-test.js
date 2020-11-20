import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bell-icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a bell icon', async function (assert) {
    await render(hbs`{{
      bell-icon
        color='#39393a' 
        width='24px' 
        height='24px'
    }}`);
    assert.dom('svg').hasClass('bell-icon');
    assert.dom('svg rect#Rectangle').hasAttribute('fill')
    assert.dom('svg.bell-icon').hasAttribute('width')
    assert.dom('svg.bell-icon').hasAttribute('height')
  });
});

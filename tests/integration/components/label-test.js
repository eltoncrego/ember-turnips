import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | label', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a label', async function (assert) {
    await render(hbs`<Label>hello</Label>`);
    assert.dom('div').hasClass('text-label');
    assert.dom('div.text-label > label').exists();
    assert.dom('label').containsText('hello');
    assert.dom('div').hasStyle({
      backgroundColor: 'rgb(173, 138, 100)',
      color: 'rgb(245, 245, 245)',
      borderRadius: '12px',
      padding: '4px 12px',
      fontSize: '12px',
      height: '18px',
      display: 'flex',
      alignItems: 'center',
    })
  });
});

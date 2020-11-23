import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | inputs/text-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a floating label', async function (assert) {
    await render(hbs`
      <Inputs::TextInput @label="Example Input" @type="text" />
    `);
    assert.dom('div').hasClass('text-input');
    assert.dom('div.text-label').exists();
    assert.dom('div.text-label').hasStyle({
      position: 'absolute',
      zIndex: '1',
      maxWidth: '102px',
    });
    assert.dom('div.text-label > label').hasStyle({
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    });
    assert.dom('input').hasClass('text-input__input');
    assert.dom('input').hasStyle({
      backgroundColor: 'rgb(245, 245, 245)',
      border: '0px none rgb(57, 57, 58)',
      borderRadius: '16px',
      color: 'rgb(57, 57, 58)',
      left: '4px',
      padding: '12px 16px 8px',
      paddingTop: '12px',
      position: 'absolute',
      top: '20px',
    });
  });
});

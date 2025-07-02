import { module, test } from 'qunit';
import { setupRenderingTest } from 'recipe-portfolio/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | banner-alert', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BannerAlert />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <BannerAlert>
        template block text
      </BannerAlert>
    `);

    assert.dom().hasText('template block text');
  });
});

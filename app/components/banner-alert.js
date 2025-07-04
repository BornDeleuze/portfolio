import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BannerAlertComponent extends Component {
  @tracked isHidden = false;

  @action
  dismiss() {
    this.isHidden = true;
    setTimeout(() => {
      let el = document.querySelector('.banner-alert');
      if (el) {
        el.style.display = 'none';
      }
    }, 400);
  }
}

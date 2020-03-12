import Component from '@ember/component';
import { action } from '@ember/object';

export default class LibraryItemFormComponent extends Component {
  // pass an action to override
  handleClick() {}

  @action
  buttonClicked(param) {
    this.handleClick(param);
  }
}

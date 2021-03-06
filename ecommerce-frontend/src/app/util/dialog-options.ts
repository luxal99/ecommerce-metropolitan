import {Options} from '../models/Options';

export class DialogOptions {

  static dialogOptions: Options;

  static getOptions(data) {
    if (window.screen.width <= 570) {
      this.dialogOptions = new Options('100%', {bottom: '0'}, '82vh', data);
    } else {
      this.dialogOptions = new Options('50%', {bottom: '0'}, '90vh', data);
    }
    return this.dialogOptions;
  }

  static getConfirmDialogOption() {
    if (window.screen.width <= 570) {
      this.dialogOptions = new Options('100vh', {bottom: 0}, '50vh');
    } else {
      this.dialogOptions = new Options('30%', {center: '0'}, 'auto');
    }
    return this.dialogOptions;
  }

}

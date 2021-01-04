export class Options {

  minWidth: string;
  position: any;
  maxHeight: string;
  data: any;

  constructor(minWidth?: string, position?: any, height?: string, data?) {
    this.minWidth = minWidth;
    this.position = position;
    this.maxHeight = height;
    this.data = data;
  }
}

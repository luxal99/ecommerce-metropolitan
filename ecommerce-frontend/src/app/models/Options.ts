export class Options {

  minWidth: string;
  position: any;
  height: string;
  data: any;

  constructor(minWidth?: string, position?: any, height?: string, data?) {
    this.minWidth = minWidth;
    this.position = position;
    this.height = height;
    this.data = data;
  }
}

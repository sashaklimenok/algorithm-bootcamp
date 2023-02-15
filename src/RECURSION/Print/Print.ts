export enum Symbols {
  empty = '',
  hash = '#',
  cross = 'x',
}

export class Print {
  public map: [x: number[], y: number[]];
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.map = [[width], [height]];
    this.width = width;
    this.height = height;
  }

  isEmpty(x: number, y: number): boolean {
    return false;
  }

  setMap(x: number, y: number, symbol: Symbols): void {
    const count = 5;
    console.log('\s\s', 'x');
  }

  printAt(x: number, y: number): void {}

  fill(x: number, y: number) {
    if (!this.isEmpty(x, y)) return;
    this.setMap(x, y, Symbols.hash);
    this.fill(x - 1, y);
    this.fill(x, y + 1);
    this.fill(x + 1, y);
    this.fill(x, y - 1);
    this.setMap(x, y, Symbols.cross);
  }
}

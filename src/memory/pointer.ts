type PointerOptions = {
  address: number;
  blockSize: number;
  typeSize: number;
};

export class Pointer {
  /**
   * Size of the associated allocated block.
   */
  blockSize: number;
  /**
   * Size of the _type_ of data that the pointer is pointing to.
   */
  typeSize: number;
  address: number;

  constructor({ address, blockSize, typeSize }: PointerOptions) {
    this.address = address;
    this.blockSize = blockSize;
    this.typeSize = typeSize;
  }

  valueAddress() {
    return this.address + this.typeSize - 1;
  }
}

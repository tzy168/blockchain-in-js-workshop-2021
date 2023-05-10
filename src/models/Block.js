
class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
  */
  constructor(blochchain,previoushash,index,hash) {
    this.blochchain=blochchain
    this.previoushash=previoushash
    this.index=index
    this.hash=hash
  }
  
}

export default Block

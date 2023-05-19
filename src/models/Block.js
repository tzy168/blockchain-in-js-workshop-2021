import { SHA256 } from "crypto-js";
export const DIFFICULTY = 3
class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
  */
  
  constructor(blochchain,previousHash,height,hash) {
    this.blochchain=blochchain;
    this.previousHash=previousHash;
    this.height=height;
    this.hash=hash;
  }

  isValid() { 
    if(this.nonce=this.hash){
      return true
    }else{
      return false
    }
    

  }
  set_Hash(){
    return  SHA256(new Date().getTime().toString()).toString()
  }

  setNonce(nonce) {
    this.nonce=nonce
    set_Hash()
  }
}
  



export default Block 

/*
验证区块是否符合挖矿难度要求
添加更新 Nonce 函数
添加更新 Hash 函数
添加 isValid 函数
*/
import crypto from "crypto-js";
const sha256 = crypto.SHA256;
export const DIFFICULTY = 3
class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
  */
  
  constructor(blochchain,previousHash,height,hash,coinbaseBeneficiary) {
    this.blochchain=blochchain;
    this.previousHash=previousHash;
    this.height=height;
    this.hash=hash;
    this.coinbaseBeneficiary=coinbaseBeneficiary;
    this.nonce=0;
    this.utxoPool;
    

  }

  setNonce(nonce) {
    this.nonce=nonce
    this.hash = this.calculateHash()
    }
  
  calculateHash(){
    return  sha256(this.previousHash+this.height+this.nonce).toString()
  }
  isValid() { 
    return this.hash == this.calculateHash()&&
    (this.hash.substring(0,DIFFICULTY) ==='0'.repeat(DIFFICULTY))
    }
  }

export default Block 

/*
验证区块是否符合挖矿难度要求
添加更新 Nonce 函数
添加更新 Hash 函数
添加 isValid 函数
*/
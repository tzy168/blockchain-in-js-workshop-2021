import sha256 from 'crypto-js/sha256.js'
import UTXOPool from './UTXOPool.js';

export const DIFFICULTY = 1

class Block {
  // 1. 完成构造函数及其参数

  constructor(blochchain,previousHash,height,hash,coinbaseBeneficiary) {
    this.blochchain=blochchain;
    this.previousHash=previousHash;
    this.height=height;
    this.hash=hash;
    this.coinbaseBeneficiary=coinbaseBeneficiary;//矿工
    this.utxoPool=new UTXOPool();
  }

  setNonce(nonce) {
    this.nonce=nonce
    this.hash = this.calculateHash()
    }
  
  calculateHash(){
    return  sha256(this.previousHash+this.height+this.nonce+this.coinbaseBeneficiary).toString()
  }
  isValid() { 
    return this.hash == this.calculateHash()&&
    (this.hash.substring(0,DIFFICULTY) ==='0'.repeat(DIFFICULTY))
    }
}

export default Block
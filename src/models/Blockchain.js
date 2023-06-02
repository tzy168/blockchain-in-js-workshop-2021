import UTXO from "../models/UTXO.js"

// Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name) {
    this.blocks=[]
    this.name=name
    this.genesis=null
    }
    

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
    
    longestChain() {
      let maxHeight = Math.max(...Object.values(this.blocks).map(block => block.height))
      let currentBlock = Object.values(this.blocks).find(block => block.height === maxHeight)
      let longestChain = []
  
      while (currentBlock) {
        longestChain.push(currentBlock)
        currentBlock = Object.values(this.blocks).find(
            (block) => block.hash === currentBlock.previousHash
        )
      }
  
      return longestChain.reverse();
      
    }
    containsBlock(Blocks){
      if (this.blocks[Blocks.hash] === Blocks){
        return true
      }
      return false
      }
    _addBlock(block){
      if (!block.isValid())return;
      if (this.containsBlock(block))return;
       const previousBlock = this.blocks[block.previousHash];
       if (block.previousHash=='root'){
       block.utxoPool=this.genesis.utxoPool.clone()
       block.utxoPool.addUTXO(block.coinbaseBeneficiary,12.5)
       this.blocks[block.hash] = block;
       return;
    }
      if (previousBlock === undefined && previousBlock.height + 1 !== block.height  )
        return;
        block.utxoPool=previousBlock.utxoPool.clone()
        block.coinbaseBeneficiary=previousBlock.coinbaseBeneficiary
        block.utxoPool.addUTXO(block.coinbaseBeneficiary,12.5)
        this.blocks[block.hash] = block;
      
    }
    
    }
    
 

export default Blockchain

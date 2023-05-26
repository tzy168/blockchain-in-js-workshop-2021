

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
 }

export default Blockchain

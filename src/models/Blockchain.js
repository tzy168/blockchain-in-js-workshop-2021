
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
    this.genesis=null//创世区块
    //储存区块
    }
    

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */

    /*
  longestChain(blocks) {
     let longestChainLen=0;
      let longestChainBlock=null;

    for(let a=0;a<blocks.length;a++){
      const currentBlock=blocks[i]
      let cuurrentChainLen=1;
      let previoushash=currentBlock.previoushash;

      while(previoushash !== null){
        for(let j=0;j<blocks.length;j++){
          if(blocks[j].hash==previoushash){
            cuurrentChainLen++;
            previoushash=blocks[j].previoushash;
            break;
          }
        }
      }
      if(cuurrentChainLen>longestChainLen){
        longestChainLen=cuurrentChainLen;
        longestChainBlock=currentBlock;
      }
    }
    while(longestChainBlock!==null){
      longestChainBlockList.push(longestChainBlock);
      for(let i=0;i<blocks.length;i++){
        if(blocks[i].hash===longestChainBlock.previoushash){
          longestChainBlock=blocks[i];
          break;
        }
      }
    }
return this.longestChain;

    return []
 //}
 */
    longestChain() {
      let blocks = Object.values(this.blocks);
      blocks.sort((a, b) => a.height - b.height);
      return blocks;
       //return this.blocks;
 }

}
export default Blockchain

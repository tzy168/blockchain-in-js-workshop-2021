import UTXO from './UTXO.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos=utxos
  }

  // 处理交易函数
  handleTransaction() {}

  // 验证交易合法性
  /**
   * 验证余额
   * 返回 bool 
   */
  isValidTransaction() {}
   addUTXO(publicKey,amount) {
    if (this.utxos[publicKey]){
      this.utxos[publicKey].amount += amount
    }
    else {
      const newUtxo = new UTXO(publicKey,amount)
      this.utxos[publicKey] = newUtxo
    }
    }

  // 将当前 UXTO 的副本克隆
  clone() {
    return new UTXOPool(clone(this.utxos))
  }

}

export default UTXOPool

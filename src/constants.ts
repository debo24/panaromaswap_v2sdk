import { bytecode } from 'panaromaswap_v2core/build/PanaromaswapV2Pair.json'
import { keccak256 } from '@ethersproject/solidity'

import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0x9f13bDf1fbBc63C0578bE156A5f43aeC0eE3f13B'

export const INIT_CODE_HASH = '0x40fc8c6d8fc94acf58bf3afda5cf96d3248c41a797461a2c68c7b428df19d94c'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

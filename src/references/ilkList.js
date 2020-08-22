import { MATIC, BAT } from 'arth-plugin-mcd';

export default [
  {
    slug: 'eth-a', // URL param
    symbol: 'MATIC-A', // how it's displayed in the UI
    key: 'MATIC-A', // the actual ilk name used in the vat
    gem: 'MATIC', // the actual asset that's being locked
    currency: MATIC, // the associated dai.js currency type
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli']
  },
  // {
  //   slug: 'eth-b',
  //   symbol: 'MATIC-B',
  //   key: 'MATIC-B',
  //   gem: 'MATIC',
  //   currency: MATIC
  // },
  // {
  //   slug: 'rep-a',
  //   symbol: 'REP-A',
  //   key: 'REP-A',
  //   gem: 'REP',
  //   currency: REP
  // },
  // {
  //   slug: 'zrx-a',
  //   symbol: 'ZRX-A',
  //   key: 'ZRX-A',
  //   gem: 'ZRX',
  //   currency: ZRX
  // },
  // {
  //   slug: 'omg-a',
  //   symbol: 'OMG-A',
  //   key: 'OMG-A',
  //   gem: 'OMG',
  //   currency: OMG
  // },
  {
    slug: 'bat-a',
    symbol: 'BAT-A',
    key: 'BAT-A',
    gem: 'BAT',
    currency: BAT,
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli']
  }
  // {
  //   slug: 'dgd-a',
  //   symbol: 'DGD-A',
  //   key: 'DGD-A',
  //   gem: 'DGD',
  //   currency: DGD,
  //   networks: ['kovan', 'mainnet'],
  //   decimals: 9
  // }
  // {
  //   slug: 'dgd-a',
  //   symbol: 'DGD-A',
  //   key: 'DGD-A',
  //   gem: 'DGD',
  //   currency: DGD,
  //   decimals: 9
  // }
];

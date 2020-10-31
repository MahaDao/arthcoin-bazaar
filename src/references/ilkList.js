import { MATIC, DAI, } from 'arth-plugin-mcd';

export default [
  {
    slug: 'edai-a', // URL param
    symbol: 'DAI-A', // how it's displayed in the UI
    key: 'DAI-A', // the actual ilk name used in the vat
    gem: 'DAI', // the actual asset that's being locked
    currency: DAI, // the associated dai.js currency type
    networks: ['matic', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli']
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

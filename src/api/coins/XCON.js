const { createERC20 } = require('./ERC20')
const { MAINNET } = require('../../const/')

module.exports = createERC20({
    symbol: 'XCON',
    name: 'Connect coin',
    color: '#000000',
    contract_address: '0x0f237d5ea7876e0e2906034d98fdb20d43666ad4',
    labels: 'xcon ethereum token erc20 ecr20',
    coin_decimals: 18,
    price_decimals: 2,
    networks_availables: [MAINNET]
})
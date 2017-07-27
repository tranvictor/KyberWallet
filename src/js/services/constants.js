import BigNumber from "bignumber.js"


// abis
const ERC20 = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minter","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"o_success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_value","type":"uint256"}],"name":"createIlliquidToken","outputs":[{"name":"o_success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"o_success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"endMintingTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_value","type":"uint256"}],"name":"createToken","outputs":[{"name":"o_success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"illiquidBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"o_success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"LOCKOUT_PERIOD","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"o_remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"makeLiquid","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_minter","type":"address"},{"name":"_endMintingTime","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_recipient","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]
const KYBER_NETWORK = [{"constant":false,"inputs":[{"name":"reserve","type":"address"},{"name":"source","type":"address"},{"name":"dest","type":"address"},{"name":"add","type":"bool"}],"name":"listPairForReserve","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newAddress","type":"address"}],"name":"upgrade","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ETH_TOKEN_ADDRESS","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"reserves","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"source","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"throwOnFailure","type":"bool"}],"name":"trade","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"reserve","type":"address"},{"name":"add","type":"bool"}],"name":"addReserve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getNumReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"source","type":"address"},{"name":"dest","type":"address"},{"name":"reserveIndex","type":"uint256"}],"name":"getRate","outputs":[{"name":"rate","type":"uint256"},{"name":"expBlock","type":"uint256"},{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_admin","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"origin","type":"address"},{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"errorInfo","type":"uint256"}],"name":"ErrorReport","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"source","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"actualSrcAmount","type":"uint256"},{"indexed":false,"name":"actualDestAmount","type":"uint256"}],"name":"Trade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"reserve","type":"address"},{"indexed":false,"name":"add","type":"bool"}],"name":"AddReserve","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"reserve","type":"address"},{"indexed":false,"name":"source","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"add","type":"bool"}],"name":"ListPairsForReserve","type":"event"}]
const KYBER_WALLET = [{"constant":true,"inputs":[],"name":"ETH_TOKEN_ADDRESS","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"srcToken","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"destToken","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minRate","type":"uint256"},{"name":"destination","type":"address"},{"name":"destinationData","type":"bytes"},{"name":"onlyApproveTokens","type":"bool"},{"name":"throwOnFail","type":"bool"}],"name":"convertAndCall","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"network","type":"address"}],"name":"setKyberNetwork","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"from","type":"address"},{"name":"amount","type":"uint256"}],"name":"recieveTokens","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"recieveEther","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"kyberNetwork","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_kyberNetwork","type":"address"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"origin","type":"address"},{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"errorInfo","type":"uint256"}],"name":"ErrorReport","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"kyberNetwork","type":"address"}],"name":"NewWallet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"network","type":"address"}],"name":"SetKyberNetwork","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"amountInWei","type":"uint256"}],"name":"IncomingEther","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"IncomingTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"destination","type":"address"},{"indexed":false,"name":"destAmount","type":"uint256"}],"name":"ConvertAndCall","type":"event"}]

// contract datas
const KYBER_WALLET_DATA = '0x6060604052341561000f57600080fd5b604051602080610d54833981016040528080519150505b60008054600160a060020a03338116600160a060020a0319928316811790935560018054858316931692909217918290557fad99b4cdeb342f8df51bd1f7c20113a98559ff13b06d1c77cc051964d7489d2b9116604051600160a060020a03909116815260200160405180910390a25b505b610cad806100a76000396000f300606060405236156100675763ffffffff60e060020a6000350416631878d1f1811461007857806331bc65ec146100a757806354a325a61461012e57806362895bf91461014f5780638da5cb5b146101795780638f4062d7146101a8578063b78b842d146101b2575b6100765b6100736101e1565b5b565b005b341561008357600080fd5b61008b610228565b604051600160a060020a03909116815260200160405180910390f35b34156100b257600080fd5b61007660048035600160a060020a03908116916024803592604435811692606435926084359260a43516919060e49060c43590810190830135806020601f82018190048102016040519081016040528181529291906020840183838082843750949650505050823515159260200135151591506102409050565b005b341561013957600080fd5b610076600160a060020a0360043516610a25565b005b341561015a57600080fd5b610076600160a060020a0360043581169060243516604435610b20565b005b341561018457600080fd5b61008b610c43565b604051600160a060020a03909116815260200160405180910390f35b6100766101e1565b005b34156101bd57600080fd5b61008b610c52565b604051600160a060020a03909116815260200160405180910390f35b7f6acab2c69f1af70741e03a20158ab72691883e31e47feaff53b10e6ecabf59503334604051600160a060020a03909216825260208201526040908101905180910390a15b565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b600080548190819033600160a060020a0390811691161461029d57600054600160a060020a0333811691600080516020610c62833981519152916308a0000f911660405191825260208201526040908101905180910390a2610a17565b600160a060020a038c1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee141561031e578a30600160a060020a03163110156103195733600160a060020a0316600080516020610c628339815191526308a0000030600160a060020a03163160405191825260208201526040908101905180910390a2610a17565b610443565b8a8c600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561037657600080fd5b6102c65a03f1151561038757600080fd5b5050506040518051905010156104435733600160a060020a0316600080516020610c628339815191526308a000018e600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561040c57600080fd5b6102c65a03f1151561041d57600080fd5b5050506040518051905060405191825260208201526040908101905180910390a2610a17565b5b5b60009250600160a060020a038c1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1415610476578a92506104f5565b600154600160a060020a03808e169163095ea7b391168d60006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156104d957600080fd5b6102c65a03f115156104ea57600080fd5b505050604051805150505b600154600160a060020a03166393766a57848e8e8e308f8f8c60006040516020015260405160e060020a63ffffffff8b16028152600160a060020a03978816600482015260248101969096529386166044860152919094166064840152608483019390935260a482019290925290151560c482015260e4016020604051808303818588803b151561058557600080fd5b6125ee5a03f1151561059657600080fd5b5050505060405180519250508115156105e55733600160a060020a0316600080516020610c628339815191526308a00002600060405191825260208201526040908101905180910390a2610a17565b600160a060020a038c1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461068857600154600160a060020a03808e169163095ea7b391166000806040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561066c57600080fd5b6102c65a03f1151561067d57600080fd5b505050604051805150505b506000600160a060020a038a1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156106b75750806107b4565b841561073b5789600160a060020a031663095ea7b3888460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561071a57600080fd5b6102c65a03f1151561072b57600080fd5b50505060405180519050506107b4565b89600160a060020a031663a9059cbb888460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561079857600080fd5b6102c65a03f115156107a957600080fd5b505050604051805150505b5b86600160a060020a0316818760405180828051906020019080838360005b838110156107ec5780820151818401525b6020016107d3565b50505050905090810190601f1680156108195780820380516001836020036101000a031916815260200191505b5091505060006040518083038185876187965a03f19250505015156108f85733600160a060020a0316600080516020610c628339815191526308a00003600060405191825260208201526040908101905180910390a2831561087a57600080fd5b89600160a060020a031663095ea7b3886000806040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156108d757600080fd5b6102c65a03f115156108e857600080fd5b5050506040518051905050610a17565b600160a060020a038a1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146109955789600160a060020a031663095ea7b3886000806040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561097957600080fd5b6102c65a03f1151561098a57600080fd5b505050604051805150505b33600160a060020a0316600080516020610c6283398151915260008060405191825260208201526040908101905180910390a233600160a060020a03167fe41d93a6c4695d694fdf20bb43f83cbe9241fd93d3e006681b0dbb878c4ccdcb8884604051600160a060020a03909216825260208201526040908101905180910390a25b505050505050505050505050565b60005433600160a060020a03908116911614610a7d57600054600160a060020a0333811691600080516020610c62833981519152916308900000911660405191825260208201526040908101905180910390a2610b1d565b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03838116919091179091553316600080516020610c6283398151915260008060405191825260208201526040908101905180910390a233600160a060020a03167faa9f606b274c2108ce1510609f5869908eab2ea65a7f5ba079342947b90bb95282604051600160a060020a03909116815260200160405180910390a25b50565b82600160a060020a03166323b872dd83308460006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b1515610b8a57600080fd5b6102c65a03f11515610b9b57600080fd5b505050604051805190501515610bed57600054600160a060020a0333811691600080516020610c62833981519152916308a00000911660405191825260208201526040908101905180910390a2610c3e565b7f398d8a3700939787db04d51a4e438f3b7b489c2afd06fe414fb57f9e7d175c44828483604051600160a060020a039384168152919092166020820152604080820192909252606001905180910390a15b505050565b600054600160a060020a031681565b600154600160a060020a031681560005d2f3e2f3e0a781082873c332729f77c49ee05d757ef3d1e5058fa0d883f36fa165627a7a72305820c3a9ba37f17b1c74c3c33a1ba0740785c618ffe420901f0bea84e46fc505b8840029'

// constants
const EPSILON = 1000
const ETHER_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
const NETWORK_ADDRESS = "0x11542d7807dfb2b44937f756b9092c76e814f8ed"
const INIT_EXCHANGE_FORM_STATE = {
  selectedAccount: "",
  sourceToken: ETHER_ADDRESS,
  sourceTokenSymbol: "",
  sourceAmount: 0,
  destToken: ETHER_ADDRESS,
  destTokenSymbol: "",
  minConversionRate: 0,
  destAddress: "",
  minDestAmount: 0,
  maxDestAmount: (new BigNumber(2)).pow(255).toString(10),
  offeredRateExpiryBlock: 0,
  offeredRateBalance: 0,
  offeredRate: 0,
  throwOnFailure: false,
  gas: 1000000,
  gasPrice: 20000000000,
  step: 1,
  broadcasting: true,
  txHash: "",
  errors: {
    selectedAccountError: "",
    destAddressError: "",
    sourceTokenError: "",
    sourceAmountError: "",
    destTokenError: "",
    maxDestAmountError: "",
    minDestAmountError: "",
    gasPriceError: "",
    gasError: "",
    passwordError: "",
  }
}

// reserves
const RESERVES = [{index: 0, name: "Kyber official reserve"}]

export default {
  ERC20, KYBER_NETWORK, EPSILON, ETHER_ADDRESS,
  NETWORK_ADDRESS, RESERVES, KYBER_WALLET,
  KYBER_WALLET_DATA, INIT_EXCHANGE_FORM_STATE,
}

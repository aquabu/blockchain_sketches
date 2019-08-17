window.Web3 = require('web3')
window.util = {}
window.util.getABI = async function getABI(path) {
    return await fetch(path).then(async (response) => {
        return await response.json()
    })
}
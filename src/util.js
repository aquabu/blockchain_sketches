window.util = {}
window.util.message = (message) => {
    var elem = document.querySelector("#messages")
    elem.innerHTML += message
    elem.innerHTML += '<br /><br />'
}

window.util.pretty = (payload) => {
    return JSON.stringify(payload, null, 2).replace(/,/g, ",<br />")
}

window.util.getABI = async function getABI(path) {
    return await fetch(path).then(async (response) => {
        return await response.json()
    })
}

window.util.sendEtherFrom = async function sendEtherFrom(account, callback) {
    const method = 'eth_sendTransaction'
    const parameters = [{
        from: yourAccount,
        to: yourAccount,
        gasPrice: gasPrice,
        value: weiValueInHex,
        //data: '0x0000000000000001' // message / function call to a smart contract
    }]

    const from = account
    const payload = {
        method: method,
        params: parameters,
        from: from,
    }

    ethereum.sendAsync(payload, function (err, response) {
        if (response.error) {
            util.message(`Rejected: ${response.error.message}`)
        }
        if (response.result) {
            const txHash = response.result
            util.message(`Paid transaction: ${txHash}`)
            util.message(`Payment details:<br />${util.pretty(payload)}`)
            window.util.pollForCompletion(txHash, callback)
        }
    })
}

window.util.pollForCompletion = function pollForCompletion(txHash, callback) {
    let calledBack = false
    const checkInterval = setInterval(function () {
        const notYet = 'response has no error or result'
        ethereum.sendAsync({
            method: 'eth_getTransactionByHash',
            params: [txHash],
        }, function (err, response) {
            if (calledBack) return
            if (err || response.error) {
                if (err.message.includes(notYet)) {
                    return 'transactiion is not yet mined'
                }

                callback(err || response.error)
            }

            const transaction = response.result
            clearInterval(checkInterval)
            calledBack = true
            callback(null, transaction)
        })
    }, 2000)
}
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
global.window.message = (message) => {
    var elem = document.querySelector("#messages")
    elem.innerHTML += message
    elem.innerHTML += '<br /><br />'
}

global.window.pretty = (payload) => {
    return JSON.stringify(payload, null, 2).replace(/,/g, ",<br />")
}
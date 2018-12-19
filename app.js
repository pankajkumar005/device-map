$(document).ready(e => {
    console.log('loaded')
    $.get('http://localhost:4001/devices', res => {
        console.log(res);
    })
})
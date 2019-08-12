$(document).ready(
    $.get(`https://picsum.photos/v2/list?page=2&limit=5&/200/300`).then(data=>{
        console.log(data)
        data.map(res=>{$('.display').append(`<div class='card class='col s6'><div class='card-title'>${res.author}</div><img src=${res.download_url} ></img></div>`)})
        // $('.display').append(`<div><img src=${data.url} ></img></div>`)
    })
)
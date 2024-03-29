// let a = document.getElementsByTagName("div")[0]
// a.innerHTML = a.innerHTML + `<h1>Hello world</h1>`

//CreateElement...........

let a = document.getElementsByTagName("div")[0]
let c = document.createElement("div")
c.innerHTML = '<h1>Hello world</h1>'
// a.appendChild(c)
// a.prepend(c)
// a.after(c)
// a.before(c)
a.replaceWith(div)
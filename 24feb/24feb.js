let celement = document.createElement("h1")
celement.textContent = "HELLO FORM JS"

let bd = document.body
bd.append(celement)


let elementh2 = document.createElement("h2")
elementh2.textContent = "WELL DONE"
bd.append(elementh2)

bd.setAttribute('bgcolor','yellow')
celement.setAttribute('align','center')

celement.setAttribute('style','background-color:deeppink ; color:white')

let h = document.getElementById("head")
h.removeAttribute('style')

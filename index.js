const para=document.createElement("h3")
const paraText = document.createTextNode("Buy high quality organic fruits online")
para.appendChild(paraText)
para.style.fontStyle = "italic";
const divs = document.getElementsByTagName("div")
const firstdiv = divs[0]
firstdiv.appendChild(para)
const secondDiv = divs[1];
const paraBeforeList = document.createElement("p");
const paraBeforeListText = document.createTextNode("Total fruits: 4");
paraBeforeList.setAttribute("id", "fruits-total");
paraBeforeList.appendChild(paraBeforeListText);
const unorderedList = secondDiv.querySelector("ul");
secondDiv.insertBefore(paraBeforeList, unorderedList);


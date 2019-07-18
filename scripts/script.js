function highlight(e) {
	this.style.background = 'red';
}

const gridContainer = document.querySelector('#grid-container')

gridContainer.style.width = "822px";
gridContainer.style.height = "822px";
gridContainer.style.border = "solid 1px black";
gridContainer.style.padding = '0px';

for (let i=0; i<16; i++) {
	for (let j=0; j<16; j++) {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', `${i}${j}`)
    newDiv.style.width = "50px";
    newDiv.style.height = "50px";
    newDiv.style.border = "solid 1px black";
    newDiv.style.position = 'inline';
    newDiv.style.float = "left";
    newDiv.style.padding = '0px';
    newDiv.style.margin = '0px';
    newDiv.addEventListener('mouseover',highlight)
    gridContainer.append(newDiv)
  }
}
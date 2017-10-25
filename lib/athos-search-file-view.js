'use babel';

export default class AthosSearchFileView {

  constructor(serializedState) {
    // Create root element
    var shell = require('shelljs');
    this.element = document.createElement('div');
    // this.element.parentNode.style.display='block';
    this.element.classList.add('athos-search-file');
    let input = document.createElement('input');

    let placeholder = document.createAttribute("placeholder");
    placeholder.value = 'Introduce archivo a buscar';
    input.setAttributeNode(placeholder)
    this.element.appendChild(input)
    console.log(atom)
    let boton = document.createElement('button');
    boton.onclick = ()=>{
      // alert(input.value)
      let ruta = atom.project.rootDirectories[0].path;
      let res = shell.find(ruta);
      res.forEach(resultado=>{
        let existe = resultado.indexOf(input.value)
        if(existe!=-1){
          // this.abrirArchivo(resultado)
          let c = document.createElement('li')
          c.innerHTML = resultado
          c.onclick = ()=>{
            atom.workspace.open(c.innerHTML)
          }
          this.element.appendChild(c)
        }
      })



      // console.log(coincidencias)
    }
    boton.innerHTML='Buscar'
    // let textoBoton = 'Buscar';
    // boton.appendChild(textoBoton)

    console.log(boton)
    this.element.appendChild(boton)

    // // Create message element
    // const message = document.createElement('div');
    // message.textContent = 'The AthosSearchFile package is Alive! It\'s ALIVE!';
    // message.classList.add('message');
    // this.element.appendChild(message);
  }

  abrirArchivo(url){
    atom.workspace.open(url)
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}

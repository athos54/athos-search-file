'use babel';

export default class AthosSearchFileView {

  constructor(serializedState) {
    // Create root element
    var shell = require('shelljs');
    this.element = document.createElement('div');
    // this.element.parentNode.style.display='block';
    this.element.classList.add('athos-search-file');
    let divform = document.createElement('div');
    let divformclass = document.createAttribute('class')
    divformclass.value = 'form'
    divform.setAttributeNode(divformclass)
    let input = document.createElement('input');

    input.value='LICENSE.md'
    let placeholder = document.createAttribute("placeholder");
    placeholder.value = 'Introduce archivo a buscar';
    input.setAttributeNode(placeholder)
    divform.appendChild(input)
    this.element.appendChild(divform)
    console.log(atom)
    let boton = document.createElement('button');
    boton.onclick = ()=>{
      atom.notifications.addSuccess('Buscando archivos');
      // alert(input.value)
      let ruta = atom.project.rootDirectories[0].path;
      let res = shell.find(ruta);
      res.forEach(resultado=>{
        let existe = resultado.indexOf(input.value)
        if(existe!=-1){
          // this.abrirArchivo(resultado)
          let c = document.createElement('li')
          let a = document.createAttribute("class")
          a.value='pr'
          c.setAttributeNode(a)
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
    divform.appendChild(boton)

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

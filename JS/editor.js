



var left = document.getElementById('arrastre-left');
var right = document.getElementById('arrastre-right');
var bar = document.getElementById('barra');



const drag = (e) => {
  document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
  left.style.width = (e.pageX - bar.offsetWidth / 2) + 'px';
  right.style.width = (e.pagey - bar.offsetWidth / 2) + 'px';
}

bar.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', drag);
});

bar.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', drag);
});
bar.ondragstart = function() {
  return false;
};


const actualizar = () =>{
    const texto_ingresado = document.getElementById("texto_ingresado")
    const editor = document.getElementById("editor")
    editor.srcdoc = texto_ingresado.value;
    }








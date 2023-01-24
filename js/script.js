let vermás_btn = document.getElementById('vermás_btn');
let ocultartexto = document.getElementById('ocultartexto');

vermás_btn.addEventListener('click', toggleText);

function toggleText() {
  ocultartexto.classList.toggle('ocultartexto');

  if(ocultartexto.classList.contains('ocultartexto')) {
    vermás_btn.innerHTML = 'ver más'
  }
  else {
    vermás_btn.innerHTML = 'ver menos'
  }
}
const si = document.getElementById("si");
const no = document.getElementById("no");

function myMessage() {
    si.innerHTML = "SÃ";
    no.innerHTML = "NO";
}
setTimeout(myMessage, 3800);

function obrir() {
  window.open("http://localhost/campus/comingSoon.html","_self");
}

no.addEventListener('click', () => {
    const boxes = document.getElementsByClassName('box');
    const malaDecisio = document.getElementById('error');
  
    for (const box of boxes) {
      // ðï¸ Remove element from DOM
      box.style.display = 'none';
  
      // ðï¸ hide element (still takes up space on page)
      // box.style.visibility = 'hidden';
    }

    malaDecisio.innerHTML = "Ens sap greu, perÃ² aquest campus no Ã©s per tu.";

});

si.addEventListener('click', () => {
  const boxes = document.getElementsByClassName('box');
  const malaDecisio = document.getElementById('error');

  for (const box of boxes) {
    // ðï¸ Remove element from DOM
    box.style.display = 'none';

    // ðï¸ hide element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }

  malaDecisio.innerHTML = "SOM LA RECEPTA.";

  setTimeout(obrir, 3800);
  
});
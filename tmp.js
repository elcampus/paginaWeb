const si = document.getElementById("si");
const no = document.getElementById("no");

function myMessage() {
    si.innerHTML = "SÍ";
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
      // 👇️ Remove element from DOM
      box.style.display = 'none';
  
      // 👇️ hide element (still takes up space on page)
      // box.style.visibility = 'hidden';
    }

    malaDecisio.innerHTML = "Ens sap greu, però aquest campus no és per tu.";

});

si.addEventListener('click', () => {
  const boxes = document.getElementsByClassName('box');
  const malaDecisio = document.getElementById('error');

  for (const box of boxes) {
    // 👇️ Remove element from DOM
    box.style.display = 'none';

    // 👇️ hide element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }

  malaDecisio.innerHTML = "SOM LA RECEPTA.";

  setTimeout(obrir, 3800);
  
});
const ads = [
  { title: "Promoción 1", text: "Descuento del 20% en todos los productos" },
  { title: "Promoción 2", text: "2x1 en bebidas todos los viernes" },
  { title: "Promoción 3", text: "Nuevo producto disponible" }
];

let index = 0;

function changeAd() {
  index = (index + 1) % ads.length;
  document.getElementById("adTitle").textContent = ads[index].title;
  document.getElementById("adText").textContent = ads[index].text;
}
setInterval(changeAd, 5000);

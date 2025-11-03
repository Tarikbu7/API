let produits = [
    { nom: "monitor", prix: 500, image: "Odyssey-G9_2.jpg" },
    { nom: "Clavier mécanique", prix: 45, image: "razer-huntsman-v2-analog.webp" },
    { nom: "Souris sans fil", prix: 25, image: "images.jpg" }
  ];
  
  let catalogue = document.getElementById("catalogue");
  
  produits.forEach(p => {
    let carte = document.createElement("div");
    carte.className = "carte";
    carte.innerHTML = `
      <img src="${p.image}" alt="${p.nom}">
      <h3>${p.nom}</h3>
      <p>Prix : ${p.prix} €</p>
    `;
    catalogue.appendChild(carte);
  });
   
  
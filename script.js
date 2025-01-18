// Sayfa yüklendiğinde çalışacak
window.onload = function () {
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  const h1 = document.querySelector("h1");

  // Varsayılan görselleri ayarla (6 ve 6)
  img1.setAttribute("src", "./images/dice6.png");
  img2.setAttribute("src", "./images/dice6.png");
  h1.innerHTML = "Welcome to Dicee Game!";

  // Sayfa yenilenmişse zarları at
  if (performance.getEntriesByType("navigation")[0].type === "reload") {
    // Rastgele zar numaraları oluştur
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Zar görsellerini güncelle
    img1.setAttribute("src", `./images/dice${randomNumber1}.png`);
    img2.setAttribute("src", `./images/dice${randomNumber2}.png`);

    // Kazananı belirle ve başlığı güncelle
    if (randomNumber1 > randomNumber2) {
      h1.innerHTML = "Player 1 Wins! 🎉";
    } else if (randomNumber1 < randomNumber2) {
      h1.innerHTML = "Player 2 Wins! 🎉";
    } else {
      h1.innerHTML = "It's a Draw!";
    }
  }
};

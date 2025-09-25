// animasi
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in, .zoom-in").forEach(el => {
    el.style.animationPlayState = "running";
  });
});

// Tombol hubungi saya
const contactBtn = document.getElementById("contactbtn");

contactBtn.addEventListener("click", function() {
    const confirmAction = confirm("Mau hubungi saya lewat WhatsApp?");
    if (confirmAction) {
        window.open("https://wa.me/6281615911742?text=Halo%20Meidhita,%20saya%20lihat%20portofolio%20kamu!", "_blank");
    } else {
        alert("Oke, mungkin nanti ya!");
    }
});
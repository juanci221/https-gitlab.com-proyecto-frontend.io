const bars = document.querySelector(".bars")
bars.onclick =function () {
  var  navBars= document.querySelector(".nav-bars");
    navBars.classList.toggle("active")

}

function changeAvatar() {
  var avatar = document.getElementById("avatar");
  var text = document.getElementById("avatar-text");
  if (avatar.style.backgroundImage == 'url("imagen3.png")') {
      avatar.style.backgroundImage = 'url("imagen4.png")';
      text.innerHTML = "Crea experiencias en línea increíbles que tus usuarios no olvidarán";
  } else {
      avatar.style.backgroundImage = 'url("imagen3.png")';
      text.innerHTML = "Transforma tus ideas en experiencias digitales únicas";
    
  }
}
setInterval(changeAvatar, 3000);

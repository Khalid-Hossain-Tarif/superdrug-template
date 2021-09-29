
window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  

  const navigation = document.querySelector('.navigation');

document.querySelector('.toggle').onclick = function () {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}
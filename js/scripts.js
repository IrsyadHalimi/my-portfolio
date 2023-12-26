$getJSON

function openModal(imageName) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = imageName;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
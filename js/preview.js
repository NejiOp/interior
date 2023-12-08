function showImage(imageSrc) {
  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popup-image');

  popup.style.display = 'block';
  popupImage.src = imageSrc;
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

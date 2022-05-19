import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onGalleryContainerClick(e) {
  const isImageEl = e.target.classList.contains('gallery__image');
  if (!isImageEl) {
    return;
  } else {
    const instance = basicLightbox.create(`
    <img
      src="${e.target.dataset.source}"/>
    `);

    instance.show();
  }
  // console.log(e.target);
}

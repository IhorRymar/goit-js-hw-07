import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const markup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', markup);
galleryContainer.addEventListener('click', onGalleryItemClick);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}" onclick="event.preventDefault()">
        <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}" 
          title="${description}"/></a>`;
    })
    .join('');
}

function onGalleryItemClick(event) {
  const isImageEl = event.target.classList.contains('gallery__image');
  if (!isImageEl) {
    return;
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  });
  lightbox.destroy();
}

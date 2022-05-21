import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const markup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', markup);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}" onclick="event.preventDefault()">
        <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}" 
          title="${description}"/></a></li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

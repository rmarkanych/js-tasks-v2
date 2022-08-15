import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML(
  'beforeend',
  galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('')
);

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});

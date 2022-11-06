// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const markup = galleryItems.map(img => `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}" target="_blank" rel="noopener noreferrer">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`).join('');
galleryList.insertAdjacentHTML('beforeend', markup);
const instance = basicLightbox.create(`<img src="" alt=""/>`,
    {
        onShow: (instance) => { console.log(`show`); document.addEventListener('keydown', keypress) },
        onClose: (instance) => { console.log(`close`); document.removeEventListener('keydown', keypress) }
    }
);
galleryList.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') return;
    instance.element().querySelector("img").alt = e.target.alt;
    instance.element().querySelector("img").src = e.target.dataset.source;
    instance.show();
});
function keypress(evt) {
    if (evt.key === `Escape`) {
        instance.close();
    }
};
const simplelightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

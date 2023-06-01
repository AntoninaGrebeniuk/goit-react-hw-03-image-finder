import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export function ImageGallery({ images }) {
  return (
    <Gallery>
      <ImageGalleryItem images={images} />
    </Gallery>
  );
}

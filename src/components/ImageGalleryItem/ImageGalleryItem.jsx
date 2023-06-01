import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ images }) {
  console.log(images);
  return (
    <>
      {images.map(({ id, webformatURL, tags }) => {
        return (
          <GalleryItem key={id}>
            <GalleryImg src={webformatURL} alt={tags} />
          </GalleryItem>
        );
      })}
    </>
  );
}

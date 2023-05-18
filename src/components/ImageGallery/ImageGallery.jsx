import { Gallery } from './ImageGallery.styled';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, showModal, setActualImage }) => {
  //   console.log('images', images);

  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          showModal={showModal}
          setActualImage={setActualImage}
        />
      ))}
    </Gallery>
  );
};

export default ImageGallery;

//types

import { GalleryItem, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, showModal, setActualImage }) => {
  //   console.log('image', image);

  const onPictureClick = () => {
    setActualImage(image.largeImageURL);
    showModal();
  };

  return (
    <GalleryItem>
      <Img src={image.webformatURL} alt={image.tags} onClick={onPictureClick} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

//proptypes

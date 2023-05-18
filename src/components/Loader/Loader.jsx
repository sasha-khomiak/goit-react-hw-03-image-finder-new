import { createPortal } from 'react-dom';
import { CirclesWithBar } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <LoaderWrap>
      <CirclesWithBar
        height="100"
        width="100"
        color="#3f51b5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </LoaderWrap>,
    loaderRoot
  );
};

export default Loader;

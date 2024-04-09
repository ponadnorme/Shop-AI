import {ColorRing} from 'react-loader-spinner';
import {SpinnerElement} from './styles';

export const LoaderSpinner = () => {
  return (
    <SpinnerElement>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#24b9d7', '#24b9d7', '#f01a90', '#f01a90', '#f0b957']}
      />
    </SpinnerElement>
  );
};

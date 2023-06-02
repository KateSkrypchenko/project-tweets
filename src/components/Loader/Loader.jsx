import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Circles
      height="120"
      width="120"
      color="#4d19c5"
      ariaLabel="circles-loading"
      wrapperStyle={{ margin: '0 20', display: 'block' }}
      wrapperClass=""
      visible={true}
    />
  );
};

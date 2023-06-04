import { GlobalStyle } from './GlobalStyles';
import { UserRoutes } from './UserRoutes';
import { Toastify } from 'components/Toastify/Toastify';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserRoutes />
      <Toastify />
    </>
  );
};

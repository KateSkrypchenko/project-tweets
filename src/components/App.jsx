import { GlobalStyle } from './GlobalStyles';
import { Wrapper } from './App.styled';

import { UserRoutes } from './UserRoutes';

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <UserRoutes />
    </Wrapper>
  );
};

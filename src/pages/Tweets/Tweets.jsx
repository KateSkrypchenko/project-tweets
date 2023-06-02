import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchUsers } from 'redux/users/users-operations';
import { selectUsers, selectIsLoading, selectError } from 'redux/users/users-selectors';

import { UserList } from 'components/UserList/UserList';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

import { Container, Title, Button, Link, Icon } from './Tweets.styled';

const Tweets = () => {
  const dispatch = useDispatch();
  const usersItems = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container>
      <Button>
        <Link to="/">
          <Icon />
          Back
        </Link>
      </Button>

      <Title>Tweets</Title>
      {error && <Error />}
      {isLoading && !error && <Loader />}
      {usersItems.length > 0 && <UserList users={usersItems} />}
    </Container>
  );
};

export default Tweets;

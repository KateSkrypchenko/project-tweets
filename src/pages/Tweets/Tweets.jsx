import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchUsers } from 'redux/users/users-operations';

import { selectUsers, selectIsLoading, selectError } from 'redux/users/users-selectors';

import { UserList } from 'components/UserList/UserList';
import { Loader } from 'components/Loader/Loader';

const Tweets = () => {
  const dispatch = useDispatch();
  const usersItems = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <p>Hello</p>
      {isLoading && !error && <Loader />}
      {usersItems.length > 0 && <UserList users={usersItems} />}
    </div>
  );
};

export default Tweets;

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const followingSuccess = () => toast.success(`You following this user.`);
export const unfollowsWarning = () => toast.warn(`You unfollow this user.`);

export const Toastify = () => {
  return <ToastContainer autoClose={3000} theme="dark" />;
};

import { Icon, Link } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

import { useAppDispatch } from '@/redux/hooks';

  
export default function HomeLink({ ...props }) {

  const dispatch = useAppDispatch();

  const goHome = () => {
    dispatch({ type: 'app/setPage', payload: 'user' });
  }

  return <Link onClick={goHome}>
    <Icon as={FaHome} fontSize='3xl' />
  </Link>;
}
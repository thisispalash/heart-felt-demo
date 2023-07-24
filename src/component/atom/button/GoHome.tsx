import { Button, Icon } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/hooks';
import { FaHome } from 'react-icons/fa';


export default function GoHome({ ...props }) {

  const dispatch = useAppDispatch();

  const syncNow = () => {
    dispatch({ type: 'app/setPage', payload: 'user' });
  }

  return (
    <Button
      p={3}
      size='lg'
      variant='ghost'
      onClick={syncNow}
      colorScheme='schemes.yellow'
    >
      <Icon as={FaHome} fontSize='2xl' />
    </Button>
  );
}
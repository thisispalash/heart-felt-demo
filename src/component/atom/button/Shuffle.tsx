import { Button, Icon } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/hooks';

import { FaRandom } from 'react-icons/fa';

export default function Shuffle({ ...props }) {

  const dispatch = useAppDispatch();

  const shuffle = () => {
    dispatch({ type: 'app/setPage', payload: 'shuffle' });
  }

  return (
    <Button
      size='lg'
      variant='ghost'
      onClick={shuffle}
      colorScheme='schemes.orange'
    >
      <Icon as={FaRandom} />
    </Button>
  );
}
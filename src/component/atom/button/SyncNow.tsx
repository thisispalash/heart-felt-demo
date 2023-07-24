import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/hooks';


export default function SyncNow({ ...props }) {

  const dispatch = useAppDispatch();

  const syncNow = () => {
    dispatch({ type: 'app/setPage', payload: 'sync' });
  }

  return (
    <Button
      size='lg'
      variant='outline'
      onClick={syncNow}
      colorScheme='schemes.green'
    >
      Feel Now
    </Button>
  );
}
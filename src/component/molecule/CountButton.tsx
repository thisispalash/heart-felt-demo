import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/hooks';


export default function CountButton({ ...props }) {

  const dispatch = useAppDispatch();

  const loadCounting = () => {
    dispatch({ type: 'app/setToast', payload: 204 });
    // dispatch({ type: 'app/setPage', payload: 'count' });
  }

  console.log('heeee')

  return (
    <Button
      size='lg'
      variant='outline'
      onClick={loadCounting}
      colorScheme='schemes.teal'
    >
      Count Heartbeat
    </Button>
  );

}
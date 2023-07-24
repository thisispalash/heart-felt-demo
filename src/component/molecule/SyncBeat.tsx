import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/hooks';


export default function SyncBeat({ ...props }) {

  const dispatch = useAppDispatch();

  const loadSyncing = () => {
    dispatch({ type: 'app/setToast', payload: 204 });
    // dispatch({ type: 'app/setPage', payload: 'sync' });
  }

  console.log('heeee')

  return (
    <Button
      size='lg'
      variant='outline'
      onClick={loadSyncing}
      colorScheme='schemes.green'
    >
      Sync Heartbeat
    </Button>
  );

}
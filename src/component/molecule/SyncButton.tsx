import { Button, useDisclosure } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/hooks';
import CameraSetup from '../modal/CameraSetup';


export default function SyncButton({ ...props }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  const loadSyncing = async () => {
    // dispatch({ type: 'app/setPage', payload: 'sync' });
    onOpen();
  }

  return <>
    <Button
      size='lg'
      variant='outline'
      onClick={loadSyncing}
      colorScheme='schemes.green'
    >
      Sync Heartbeat
    </Button>
    <CameraSetup 
      caller='sync'
      isOpen={isOpen} 
      onClose={onClose} 
    />
  </>;

}
import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/hooks';


export default function SyncNow({ ...props }) {

  const dispatch = useAppDispatch();

  const syncNow = () => {
    
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
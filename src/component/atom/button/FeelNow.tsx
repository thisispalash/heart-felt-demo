import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/hooks';


export default function FeelNow({ ...props }) {

  const dispatch = useAppDispatch();

  const feelNow = () => {
    dispatch({ type: 'app/setPage', payload: 'feel' });
  }

  return (
    <Button
      size='lg'
      variant='outline'
      onClick={feelNow}
      colorScheme='schemes.green'
    >
      Feel Now
    </Button>
  );
}
import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/hooks';
import { generateWallet } from '@/redux/features/web3/thunks/wallet';


export default function EnterSite({ ...props }) {

  const dispatch = useAppDispatch();

  const enterSite = () => {
    dispatch({ type: 'app/setToast', payload: 77001 });
    dispatch(generateWallet());
    setTimeout(() => { dispatch({ type: 'app/setToast', payload: 77003 }) }, 1200);
    setTimeout(() => { window.location.href = '/user' }, 4200);
  }

  return (
    <Button
      size='lg'
      variant='outline'
      onClick={enterSite}
      colorScheme='schemes.orange'
    >
      Enter Site
    </Button>
  );
}
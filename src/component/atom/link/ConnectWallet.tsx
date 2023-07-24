import { Link } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/hooks';
  
export default function ConnectWallet({ ...props }) {

  const dispatch = useAppDispatch();

  const connect = () => {
    dispatch({ type: 'app/setToast', payload: 204 });
  }

  return <Link onClick={connect}>connect wallet</Link>;
}
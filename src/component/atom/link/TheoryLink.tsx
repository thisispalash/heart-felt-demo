import { Link } from '@chakra-ui/react';
import { useAppDispatch } from '@/redux/hooks';
  
export default function TheoryLink({ ...props }) {

  const dispatch = useAppDispatch();

  const linkOut = () => {
    dispatch({ type: 'app/setToast', payload: 204 });
    // window.open('/theory');
  }

  return <Link onClick={linkOut}>Theory</Link>;
}
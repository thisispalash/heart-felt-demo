import { useEffect } from 'react';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';  

import { useToast, UseToastOptions } from '@chakra-ui/react';

export default function Notification({ ...props }) {

  const toast = useToast();
  const dispatch = useAppDispatch();

  const code = useAppSelector((state: RootState) => state.app.toast);

  const config: UseToastOptions = {
    title: undefined,
    description: undefined,
    status: undefined,
    position: 'top',
    variant: 'subtle',
    isClosable: true,
    duration: 3000,
    colorScheme: 'schemes.yellow',
    containerStyle: {
      color: 'dark',
      fontFamily: 'display',
    },
    onCloseComplete: () => {
      dispatch({ type: 'app/clearToast' });
    },
  }

  const displayToast = () => {
    switch(code) {
      case 204:
        config.title = 'Canary feature!';
        config.description = 'This feature is not yet available.';
        config.status = 'info';
        break;
      default:
        config.title = 'Error';
        config.description = 'Something went wrong.';
        config.status = 'error';
    }
  
    toast(config);
  }

  useEffect(() => { if(code) displayToast(); }, [code]);

  return <></>;
}

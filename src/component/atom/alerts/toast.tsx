import { useEffect } from 'react';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';  

import { useToast, UseToastOptions } from '@chakra-ui/react';
import { HStack, Link, Text } from '@chakra-ui/react';

export default function Notification({ ...props }) {

  const toast = useToast();
  const dispatch = useAppDispatch();

  const code = useAppSelector((state: RootState) => state.app.toast);
  const { wallet, display } = useAppSelector((state: RootState) => state.web3);

  const config: UseToastOptions = {
    title: undefined,
    description: undefined,
    status: undefined,
    position: 'top',
    variant: 'subtle',
    isClosable: true,
    duration: 6969,
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
      
      /** app related codes */
      
      case 204:
        config.status = 'info';
        config.title = 'Canary feature!';
        config.description = 'This feature is not yet available.';
      break;
      case 4043116: // ie, 404cam
        config.status = 'info';
        config.title = 'No camera found!';
        config.description = 'Camera access is required for this app to work!';
        config.colorScheme = 'schemes.red';
      break;
      case 4063116: // ie, 406cam
        config.status = 'error';
        config.title = 'Camera not accessible';
        config.description = 'Camera access is required for this app to work!';
        config.colorScheme = 'schemes.red';
      break;

      /** web3 related codes */

      case 77001:
        config.status = 'info';
        config.title = 'Generating..';
        config.description = '..a brand new wallet for you!';
      break;
      case 77003:
        config.status = 'success';
        config.title = 'Wallet Ready!';
        config.description = (
          <HStack spacing={1}>
            <Text>View on explorer</Text>
            <Link href={`https://mumbai.polygonscan.com/address/${wallet.address}`} isExternal>
              {display}
            </Link>
          </HStack>
        );
      break;

      /** default */
      default:
        config.status = 'error';
        config.title = 'Error';
        config.description = 'Something went wrong.';
      break;
    }
  
    toast(config);
  }

  useEffect(() => { if(code) displayToast(); }, [code]);

  return <></>;
}

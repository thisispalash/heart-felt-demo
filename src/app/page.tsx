'use client'

/** package imports */

import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { HStack, Spacer, Text, VStack } from '@chakra-ui/react';

/** application imports */

import BigBrand from '@/component/atom/display/BigBrand';

export default function Home() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'app/setPage', payload: 'welcome' });
  }, []);

  return (
    <VStack
      h='100vh' 
      w='100vw'
      px={12} 
      spacing={4}
    >
      <BigBrand />
      <Spacer />
      {/* <EnterSite /> */}
      <HStack spacing={1}>
        <Text fontSize='sm'>or</Text>
        {/* <ConnectWallet /> */}
      </HStack>
      <Spacer />
      {/* <BeatingHeart /> */}
    </VStack>
  )
}

'use client'

import { useEffect } from 'react';
import { HStack, Heading, Link, Spacer, VStack } from '@chakra-ui/react';

import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useWallet } from '@/context/WalletContext';

// @note app based page routing not used anymore since redux not persisting state
export default function Page({ ...props }) {

  const dispatch = useAppDispatch();

  const { wallet, display } = useWallet();

  // const { wallet, display } = useAppSelector((state: RootState) => state.web3);

  useEffect(() => {
    console.log(wallet, display)
    dispatch({ type: 'app/setPage', payload: 'home' });
  }, []);

  const Welcome = (
    <VStack spacing={2} w='full' h='full' textAlign='left'>
      <Heading w='full'>Welcome</Heading>
      <Link href={`https://mumbai.polygonscan.com/address/${wallet?.address}`} isExternal>
        {display}
      </Link>
    </VStack>
  )

  return (
    <VStack 
      p={8}
      w='full'
      spacing={6} 
      textAlign='left'
    >
      <HStack spacing={6} w='full'>
        {Welcome}
        {/* <Logo /> */}
      </HStack>
      <HStack spacing={6} w='full'>
        {/* <SyncNow /> */}
        <Spacer />
      </HStack>
    </VStack>
  );

}
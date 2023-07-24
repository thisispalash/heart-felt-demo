'use client'

/** package imports */

import { useAppSelector } from '@/redux/hooks';
import { HStack, Spacer, Text, VStack } from '@chakra-ui/react';

/** application imports */

import BigBrand from '@/component/atom/display/BigBrand';
import EnterSite from '@/component/atom/button/EnterSite';
import ConnectWallet from '@/component/atom/link/ConnectWallet';
import { RootState } from '@/redux/store';
import WelcomeUser from '@/component/atom/display/WelcomeUser';
import SyncNow from '@/component/atom/button/SyncNow';
import Shuffle from '@/component/atom/button/Shuffle';

const LandingPage = <>
  <BigBrand />
  <Spacer />
  <EnterSite />
  <HStack spacing={1}>
    <Text fontSize='sm'>or</Text>
    <ConnectWallet />
  </HStack>
  <Spacer />
</>;


const UserPage = <>
  <Spacer />
  <HStack spacing={6} w='full'>
    <WelcomeUser />
    <Spacer />
  </HStack>
  <HStack spacing={3} w='full'>
    <SyncNow />
    <Shuffle />
    <Spacer />
  </HStack>
  <Spacer />
</>;

const SyncPage = <>
  <Spacer />
  <HStack spacing={6} w='full'>
    {/* <SyncBeat /> */}
    {/* <CountBeat /> */}
  </HStack>
  <Spacer />
</>;

export default function Page() {

  const { page } = useAppSelector((state: RootState) => state.app);

  const renderPage = () => {
    switch(page) {
      case 'user': return UserPage;
      case 'sync': return SyncPage;
      default: return LandingPage;
    }
  }

  return renderPage();
}

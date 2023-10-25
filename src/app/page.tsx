'use client'

/** package imports */

import { useAppSelector } from '@/redux/hooks';
import { Divider, HStack, Spacer, Text, VStack } from '@chakra-ui/react';

/** application imports */

import { RootState } from '@/redux/store';

import SyncProvider from '@/context/SyncContext';
import CountProvider from '@/context/CountContext';

import BigBrand from '@/component/atom/display/BigBrand';
import WelcomeUser from '@/component/atom/display/WelcomeUser';

import FeelNow from '@/component/atom/button/FeelNow';
import Shuffle from '@/component/atom/button/Shuffle';
import EnterSite from '@/component/atom/button/EnterSite';

import ConnectWallet from '@/component/atom/link/ConnectWallet';

import SyncButton from '@/component/molecule/SyncButton';
import CountButton from '@/component/molecule/CountButton';
import SyncBeat from '@/component/activity/SyncBeat';

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
    <FeelNow />
    <Shuffle />
    <Spacer />
  </HStack>
  <Spacer />
</>;

const FeelPage = <>
  <Spacer />
  <VStack spacing={6} w='full'>
    <SyncProvider>
      <SyncButton />
    </SyncProvider>
    <Divider w='7vw' color='light' />
    <CountProvider>
      <CountButton />
    </CountProvider>
  </VStack>
  <Spacer />
</>;

export default function Page() {

  const { page } = useAppSelector((state: RootState) => state.app);

  const renderPage = () => {
    switch(page) {
      case 'user': return UserPage;
      case 'feel': return FeelPage;
      case 'sync': return SyncBeat;
      // case 'count': return CountBeat;
      default: return LandingPage;
    }
  }

  return renderPage();
}

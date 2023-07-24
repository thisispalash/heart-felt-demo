/**
 * 
 */

/* package imports */

import { HStack, Spacer } from '@chakra-ui/react';


/* application imports */

import { useAppSelector } from '@/redux/hooks';

import GoHome from '@/component/atom/button/GoHome';
import TrialLink from '@/component/atom/link/TrialLink';
import TheoryLink from '@/component/atom/link/TheoryLink';

// import Wallet from '@/component/atom/button/Wallet';

export interface FooterProps {}

export default function Footer({ ...props }: FooterProps) {

  const {} = props;

  const page = useAppSelector(state => state.app.page);

  const LinkStack = (
    <HStack
      spacing={4}
      align='center'
      fontSize='lg'
    >
      <Spacer />
      <TrialLink />
      <TheoryLink />
      {/* <Spacer /> */}
    </HStack>
  )

  const FooterStack = () => {
    let jsx = <></>;
    
    switch (page) {
      case 'user':
        jsx = <>
          {/* <Wallet /> */}
          <Spacer />
          {LinkStack}
        </>;
      break;
      case 'sync':
        jsx = <>
          {/* <Wallet /> */}
          <Spacer />
          <GoHome />
        </>;
      break;
    }

    return jsx;
  }

  return (
    <HStack 
      p={4}
      w='full'
      bottom={0}
      position='sticky'
    >
      <FooterStack />
    </HStack>
  );
}
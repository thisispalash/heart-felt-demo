/**
 * 
 */

/* package imports */

import { HStack, Spacer } from '@chakra-ui/react';


/* application imports */

import TrialLink from '@/component/atom/link/TrialLink';
import TheoryLink from '@/component/atom/link/TheoryLink';
import { useAppSelector } from '@/redux/hooks';

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
      <Spacer />
    </HStack>
  )

  const FooterStack = () => {
    switch (page) {
      case 'welcome': return <></>;
      case 'dashboard': // TODO, change wallet to home link
      default: 
        return (
          <>
            {/* <Wallet /> */}
            <Spacer />
            {LinkStack}
          </>
        );
    }
  }

  return (
    <HStack 
      p={4}
      w='full' 
      bottom={0}
      position='absolute'
    >
      <FooterStack />
    </HStack>
  );
}
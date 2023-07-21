/**
 * 
 */

/* package imports */

import { HStack, Spacer } from '@chakra-ui/react';


/* application imports */

import TrialLink from '@/component/atom/link/TrialLink';
import TheoryLink from '@/component/atom/link/TheoryLink';

// import Wallet from '@/component/atom/button/Wallet';

export interface FooterProps {}

export default function Footer({ ...props }: FooterProps) {

  const {} = props;

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

  return (
    <HStack 
      p={4}
      w='full' 
      bottom={0}
      position='absolute'
    >
      {/* <Wallet /> */}
      <Spacer />
      {LinkStack}
    </HStack>
  );
}
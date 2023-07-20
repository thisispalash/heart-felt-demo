/**
 * 
 */

/* package imports */

import { HStack, Spacer } from '@chakra-ui/react';


/* application imports */

// import TrialLink from '@/component/atom/button/TrialLink';
// import TheoryLink from '@/component/atom/button/TheoryLink';

// import Wallet from '@/component/atom/button/Wallet';

export interface FooterProps {}

export default function Footer({ ...props }: FooterProps) {

  const {} = props;

  const LinkStack = (
    <HStack
      spacing={4}
      align='center'
    >
      <Spacer />
      {/* <TrialLink /> */}
      {/* <TheoryLink /> */}
      <Spacer />
    </HStack>
  )

  return (
    <HStack 
      p={4}
      w='full' 
      bottom={0}
    >
      {/* <Wallet /> */}
      <Spacer />
      {LinkStack}
    </HStack>
  );
}
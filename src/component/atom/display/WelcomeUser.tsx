import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { Heading, Link, VStack } from '@chakra-ui/react';


export default function WelcomeUser({ ...props }) {

  const { wallet, display } = useAppSelector((state: RootState) => state.web3);

  return (
    // <Heading
    //   w='full'
    //   pt={8} px={12}
    //   color='white'
    //   opacity={0.7}
    //   fontSize='4xl'
    //   textAlign='left'
    //   position='absolute'
    // >
    //   Welcome <br />
    //   <Link href={`https://mumbai.polygonscan.com/address/${wallet?.address}`} isExternal>
    //     {display}
    //   </Link>
    // </Heading>

    <VStack
      w='full'
      pt={8} px={12}
      color='white'
      opacity={0.7}
      fontSize='4xl'
      textAlign='left'
    >
      <Heading w='full'>Welcome</Heading>
      <Link href={`https://mumbai.polygonscan.com/address/${wallet?.address}`} isExternal w='full'>
        {display}
      </Link>
    </VStack>
  );
}
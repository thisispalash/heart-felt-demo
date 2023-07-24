import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { Heading, Link, VStack } from '@chakra-ui/react';


export default function WelcomeUser({ ...props }) {

  const { wallet, display } = useAppSelector((state: RootState) => state.web3);

  return (
    <VStack
      w='full'
      color='white'
      opacity={0.7}
      fontSize='4xl'
      textAlign='left'
    >
      <Heading w='full' pl={6}>Welcome</Heading>
      <Link 
        pl={12}
        w='full'
        isExternal 
        href={`https://mumbai.polygonscan.com/address/${wallet?.address}`} 
      >
        {display}
      </Link>
    </VStack>
  );
}
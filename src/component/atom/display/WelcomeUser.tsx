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
      alignItems='start'
    >
      <Heading 
        pl={6}
        fontSize='5xl'
      >
        Welcome
      </Heading>
      <Link 
        pl={12}
        isExternal 
        noOfLines={1}
        href={`https://mumbai.polygonscan.com/address/${wallet?.address}`} 
      >
        {display}
      </Link>
    </VStack>
  );
}
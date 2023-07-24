import { Box, Icon } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export interface HeartProps {}

export default function Heart({ ...props }: HeartProps) {

  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state: RootState) => state.app);

  
  const config = { mx: 8, my: 4 }
  const getHeartProps = () => {
    switch(page) {
      case 'user': 
        return {
          ...config,
          my: 8,
          right: 0,
          top: 0
        }
      case 'feel':
        return {
          display: 'none'
        }
      default: 
        return {
          ...config,
          right: 0,
          bottom: 0
        }
    }
  }


  return (
    <Box
      w='12vh' h='12vh'
      borderRadius='full'
      position='absolute'
      {...getHeartProps()}
    >
      <Icon
        as={FaHeart}
        color='red'
        boxSize='10vh'
        animation={`beat infinite 3s ease-in-out`}
      />
    </Box>
  )
}
'use client'

import { useEffect, useRef } from 'react';
import { HStack, Icon, Modal, ModalContent, ModalOverlay, Spacer, Text, useDisclosure } from '@chakra-ui/react';
import { FaPowerOff } from 'react-icons/fa6';
import { useSync } from '@/context/SyncContext';



export default function SyncPage({ ...props }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const canvasRef = useRef();
  const { toggleActivity } = useSync();


  // open Modal on load
  useEffect(() => toggleActivity!(), []);


  const SetupModal = <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        
      </ModalContent>
    </Modal>
  </>;

  const IntervalSelect = <>
  
  </>;

  const QuitSync = <>
    <Icon 
      as={FaPowerOff} 
      // color={}
    />
  </>;

  return <>
    <Spacer />
      <Text></Text>
      <canvas id='syncCanvas'></canvas>
      <HStack w='full'>
        {IntervalSelect}
        <Spacer />
        {QuitSync}
      </HStack>
    <Spacer />
  </>;

}
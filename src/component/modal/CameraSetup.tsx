'use client'

import { useCamera } from '@/context/CameraContext';
import { useAppDispatch } from '@/redux/hooks';
import { Box, Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Step, StepDescription, StepIcon, StepIndicator, StepSeparator, StepStatus, StepTitle, Stepper, Text, VStack, useSteps } from '@chakra-ui/react';
import { createRef, useEffect, useRef } from 'react';

const steps = [
  { title: 'Camera', description: 'Please allow access to the camera' },
  { title: 'Finger', description: 'Please place non dominant thumb on camera' },
  { title: 'Regularize', description: 'Please wait for waveform to regularlize' }
]

const MAX_CANVAS_WIDTH = 480;
const MAX_CANVAS_HEIGHT = 360;

export default function CameraSetup(
  { isOpen, onClose, caller } :
  { isOpen: boolean, onClose: () => void, caller: string }
) {

  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({ index:0, count:steps.length });
  const { startCamera, videoStream, checkRedShade } = useCamera();
  const dispatch = useAppDispatch();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const vidRefCallback = (node: any) => {
    if (node && videoStream) {
      (node as HTMLVideoElement).srcObject = videoStream;

      node.onplay = () => {
        if(canvasRef.current) {
          const canvas = canvasRef.current;
          const ctx = canvasRef.current?.getContext('2d');

          const videoAR = node.videoWidth / node.videoHeight;
          const canvasAR = MAX_CANVAS_WIDTH / MAX_CANVAS_HEIGHT; // w=480px, h=360px

          if(videoAR > canvasAR) {
            canvas.width = MAX_CANVAS_WIDTH;
            canvas.height = MAX_CANVAS_WIDTH / videoAR;
          } else {
            canvas.height = MAX_CANVAS_HEIGHT;
            canvas.width = MAX_CANVAS_HEIGHT * videoAR;
          }

          const drawVideoToCanvas = () => {
            ctx?.drawImage(node, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(drawVideoToCanvas);
            // const isCovered = checkRedShade!(canvasRef.current as HTMLCanvasElement);
            // console.log('reds:', isCovered);
            // if(isCovered) goToNext();
          }

          drawVideoToCanvas();
        }
      }
    }
  }

  const selectColorScheme = () => {
    switch(caller) {
      case 'sync': return 'schemes.green';
      case 'count': return 'schemes.teal';
      case 'shuffle': return 'schemes.orange';
      default: return 'schemes.red';
    }
  }

  const Progress = <VStack w='full' spacing={4}>
    <Stepper size='md' index={activeStep} colorScheme={selectColorScheme()}>
      {steps.map( (step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
            />
          </StepIndicator>
          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            {/* <StepDescription>{step.description}</StepDescription> */}
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
    <Text>
      Step {activeStep+1}: {steps[activeStep].description}
    </Text>
  </VStack>;

  const ConnectCamera = <HStack w='full'>
    <Spacer />
    <Button
      variant='outline'
      onClick={startCamera}
      colorScheme={selectColorScheme()}
    >
      Connect Camera
    </Button>
    <Spacer />
  </HStack>;

  useEffect(() => { 
    if(videoStream && videoStream.active) {
      goToNext();
    }
  }, [videoStream]);

  const PlaceFinger = <HStack w='full'>
    <Spacer />
    <video ref={vidRefCallback} autoPlay style={{ display: 'none' }}/>
    <canvas ref={canvasRef} style={{ borderRadius: '10px' }} />
    <Spacer />
  </HStack>;

  const RegularWaveform = <></>;

  const closeModal = () => {
    switch(activeStep) {
      case 0: break;
      case 1: 
      case 2:
        videoStream?.getTracks()[0].stop();
        setActiveStep(0);
      break;
    }
    onClose();
  }

  return (
    <Modal 
      size='xl'
      isCentered
      isOpen={isOpen} 
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{Progress}</ModalHeader>
        <ModalBody>
          {
            {
              0: ConnectCamera,
              1: PlaceFinger,
              2: RegularWaveform
            }[activeStep]
          }
        </ModalBody>
        <ModalFooter>
          <Button variant='outline' colorScheme='schemes.red' onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>

    </Modal>
  );

}
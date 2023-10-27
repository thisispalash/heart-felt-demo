import { CONSTS, useCamera } from '@/context/CameraContext';
import { Box, HStack, Slider, SliderFilledTrack, SliderTrack, Spacer, VStack, useSteps } from '@chakra-ui/react';
import { useRef } from 'react';


export default function PlaceFingerComponent({ ...props }) {

  const { setActiveStep } = props;

  const { avgRGB, videoStream, checkRedShade } = useCamera();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const vidRefCallback = (node: any) => {

    const { 
      MAX_CANVAS_WIDTH, 
      MAX_CANVAS_HEIGHT, 
      FRAME_RATE,
    } = CONSTS;

    if (node && videoStream) {
      (node as HTMLVideoElement).srcObject = videoStream; // start video

      let frameCounter = 0;
      node.onplay = () => {
        if(canvasRef.current) {
          const canvas = canvasRef.current;
          const ctx = canvasRef.current?.getContext('2d');

          // setup canvas within modal
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
            
            if(frameCounter % FRAME_RATE === 0) {
              const isCovered = checkRedShade!(canvasRef.current as HTMLCanvasElement);
              if(isCovered) setActiveStep(2); // ie, Step 3: RegularizeWaveform
            }
            
            frameCounter++;
            requestAnimationFrame(drawVideoToCanvas);
          }

          drawVideoToCanvas();
        }
      }
    }
  }

  // @dev TODO
  const IndicatorProps = {
    position: 'absolute',
    top: '50%',
    h: '100%',
    w: '2px',
    backgroundColor: 'black',
    transform: 'translateY(-50%)'
  }

  return (
    <VStack w='full' spacing={4}>
      <HStack w='full'>
        <Spacer />
        <video ref={vidRefCallback} autoPlay style={{ display: 'none' }}/>
        <canvas ref={canvasRef} style={{ borderRadius: '10px' }} />
        <Spacer />
      </HStack>

      {/* Red Slider */}
      <Box position='relative' w='full'>
        <Slider colorScheme='schemes.red' value={avgRGB?.r}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
        </Slider>
        <Box
          top='50%'
          h='42%' w='3px'
          position='absolute'
          backgroundColor='white'
          left={`${(CONSTS.THRESHOLD.r / 255) * 100}%`}
        />
      </Box>

      {/* Green Slider */}
      <Box position='relative' w='full'>
        <Slider colorScheme='schemes.green' value={avgRGB?.g}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
        </Slider>
        <Box
          top='50%'
          h='42%' w='3px'
          position='absolute'
          backgroundColor='white'
          left={`${(CONSTS.THRESHOLD.g / 255) * 100}%`}
        />
      </Box>

      {/* Blue Slider */}
      <Box position='relative' w='full'>
        <Slider colorScheme='schemes.teal' value={avgRGB?.b}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
        </Slider>
        <Box
          top='50%'
          h='42%' w='3px'
          position='absolute'
          backgroundColor='white'
          left={`${(CONSTS.THRESHOLD.b / 255) * 100}%`}
        />
      </Box>
    </VStack>
  )
}
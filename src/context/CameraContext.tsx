'use client'

import { useAppDispatch } from '@/redux/hooks';
import { MutableRefObject, createContext, useContext, useEffect, useState } from 'react';

export const CONSTS = {
  MAX_CANVAS_WIDTH: 480,
  MAX_CANVAS_HEIGHT: 360,
  FRAME_RATE: 8, // check every 8 frames
  CHECK_INTERVAL: 420, // check every 420ms ~ unused currently
  ROI: { x: 100, y:100, w: 200, h: 200 }, // region of interest
  THRESHOLD: { r: 144, g: 55, b: 34 }
}

export interface CameraContextType {
  avgRGB?: { r:number, g:number, b:number };
  videoStream?: MediaStream | null;
  startCamera?: () => void;
  checkRedShade?: (canvas: HTMLCanvasElement) => boolean;
  regularizeWaveform?: () => void;
}

const CameraContext = createContext<CameraContextType>({});

export default function CameraProvider({ children }: { children: React.ReactNode }) {

  const dispatch = useAppDispatch();
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [avgRGB, setAvgRGB] = useState<{r:number, g:number, b:number}>({ r:0, g:0, b:0 });

  // @note : presumes that camera is present / available to use
  const startCamera = async () => {
    console.log('requesting camera access..')
    try {
      if(navigator.mediaDevices) {
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setVideoStream(videoStream);
      }
    } catch (err) {
      dispatch({ type: 'app/setToast', payload: 4063116 });
    }
  }

  const checkRedShade = (canvas: HTMLCanvasElement) => {
    const ctx = canvas?.getContext('2d');
    // const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
    const imageData = ctx?.getImageData(CONSTS.ROI.x, CONSTS.ROI.y, CONSTS.ROI.w, CONSTS.ROI.h);
    const data = imageData?.data;
    
    let totalR = 0, totalG = 0, totalB = 0;
    let avgPx = { r:0, g:0, b:0 };
    if(data) {
      for(let i=0; i<data.length; i+=4) {
        totalR += data[i];
        totalG += data[i+1];
        totalB += data[i+2];
      }

      avgPx = {
        r: totalR / (data.length / 4),
        g: totalG / (data.length / 4),
        b: totalB / (data.length / 4)
      }
      setAvgRGB(avgPx);

    }
    
    return avgPx.r > CONSTS.THRESHOLD.r 
      && avgPx.g < CONSTS.THRESHOLD.g
      && avgPx.b < CONSTS.THRESHOLD.b;
  }

  const regularizeWaveform = async () => {

  }

  return (
    <CameraContext.Provider 
      value={{
        avgRGB,
        videoStream,
        startCamera,
        checkRedShade,
        regularizeWaveform
      }}
      >
      {children}
    </CameraContext.Provider>
  );
}

export const useCamera = () => useContext(CameraContext);
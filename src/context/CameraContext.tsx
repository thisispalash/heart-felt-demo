'use client'

import { useAppDispatch } from '@/redux/hooks';
import { createContext, useContext, useEffect, useState } from 'react';


export interface CameraContextType {
  videoStream?: MediaStream | null;
  startCamera?: () => void;
  checkRedShade?: (canvas: HTMLCanvasElement) => boolean;
  regularizeWaveform?: () => void;
}

const CameraContext = createContext<CameraContextType>({});

export default function CameraProvider({ children }: { children: React.ReactNode }) {

  const dispatch = useAppDispatch();
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);

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
    const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData?.data;
    
    let redPixels = 0;

    if(data) {
      for(let i=0; i<data.length; i+=4) {
        let r = data[i];
        let g = data[i+1];
        let b = data[i+2];

        console.log(r,g,b);

        if(r>150 && b<50 && g<50) redPixels++;
      }
    }

    return redPixels > (canvas.width * canvas.height) * 0.7; // ie, > 70% pixels are red
  }

  const regularizeWaveform = async () => {

  }

  return (
    <CameraContext.Provider 
      value={{
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
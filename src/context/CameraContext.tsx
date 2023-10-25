'use client'

import { useAppDispatch } from '@/redux/hooks';
import { createContext, useContext, useEffect, useState } from 'react';


export interface CameraContextType {
  videoStream?: MediaStream | null;
  startCamera?: () => void;
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

  return (
    <CameraContext.Provider 
      value={{
        videoStream,
        startCamera
      }}
      >
      {children}
    </CameraContext.Provider>
  );
}

export const useCamera = () => useContext(CameraContext);
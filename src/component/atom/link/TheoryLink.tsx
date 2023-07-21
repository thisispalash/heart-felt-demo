import { Link, useToast, UseToastOptions } from '@chakra-ui/react';

interface Toast_Opts {
  title: string;
  description: string;
  status: UseToastOptions['status'];
  duration: number;
  isClosable: boolean;
};

export default function Theory({ ...props }) {
  
  const toast = useToast();

  const toast_opts: Toast_Opts = {
    title: 'Coming Soon',
    description: 'This feature is not yet available.',
    status: 'info',
    duration: 7000,
    isClosable: true,
  }
  
  const linkOut = () => {
    toast(toast_opts);
  }

  return (
    <Link
      // href='/theory'
      onClick={linkOut}
    >
      Theory
    </Link>
  );
}
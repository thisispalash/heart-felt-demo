import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';


const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  dialog: {
    bg: 'dark',
    color: 'light',
  },
  dialogContainer: {
    borderColor: 'light',
    borderRadius: 'md'

  }
});

export const modalTheme = defineMultiStyleConfig({ baseStyle });
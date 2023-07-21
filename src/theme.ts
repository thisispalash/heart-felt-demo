import { extendTheme } from '@chakra-ui/react';
import { Trirong, Snippet, Work_Sans } from 'next/font/google'


/** font families */

const fonts = {
  text: Work_Sans({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    preload: true,
    fallback: ['sans-serif'],
    subsets: ['latin', 'latin-ext']
  }),
  heading: Snippet({
    weight: '400',
    style: 'normal',
    preload: true,
    fallback: ['monospace'],
    subsets: ['latin']
  }),
  display: Trirong({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    preload: true,
    fallback: ['serif'],
    subsets: ['latin', 'latin-ext']
  })
}


/** application colors */

const colors = {

  /** base palette */
  
  white: "#FFFFFF",
  black: "#121212",
  dark: "#1E1E1E",
  light: "#E1E1E1",
  red: "#E7662B",
  orange: "#E78732",
  yellow: "#EDAF4D",
  green: "#2CB67D",
  teal: "#4D9CA1",
  
  /** color schemes */

  schemes: {
    red: {
      "50": "#FCEEE8",
      "100": "#F8D1BF",
      "200": "#F3B396",
      "300": "#EE956C",
      "400": "#EA7743",
      "500": "#E55A1A",
      "600": "#B74815",
      "700": "#893610",
      "800": "#5C240A",
      "900": "#2E1205"
    },
    orange: {
      "50": "#FCF2E8",
      "100": "#F8DABF",
      "200": "#F3C296",
      "300": "#EEA96D",
      "400": "#E99144",
      "500": "#E4791B",
      "600": "#B76115",
      "700": "#894910",
      "800": "#5B310B",
      "900": "#2E1805"
    },
    yellow: {
      "50": "#FDF5E8",
      "100": "#F8E2BE",
      "200": "#F4CF94",
      "300": "#F0BC6B",
      "400": "#ECAA41",
      "500": "#E89717",
      "600": "#B97913",
      "700": "#8B5B0E",
      "800": "#5D3C09",
      "900": "#2E1E05"
    },
    green: {
      "50": "#EAFAF4",
      "100": "#C6F1DF",
      "200": "#A1E8CB",
      "300": "#7CDFB6",
      "400": "#57D6A2",
      "500": "#32CD8D",
      "600": "#28A471",
      "700": "#1E7B55",
      "800": "#145238",
      "900": "#0A291C"
    },
    teal: {
      "50": "#EEF6F7",
      "100": "#CFE6E8",
      "200": "#B0D7D9",
      "300": "#91C7CA",
      "400": "#72B7BB",
      "500": "#52A7AD",
      "600": "#42868A",
      "700": "#316468",
      "800": "#214345",
      "900": "#102123"
    }
  }

};


/** application styles */

const styles = {}


/** component variants */

const components = {}


/** export theme */

export const theme = extendTheme({ fonts, colors, styles, components });
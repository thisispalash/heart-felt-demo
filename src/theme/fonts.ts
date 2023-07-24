import { Trirong, Snippet, Work_Sans } from 'next/font/google';

const work_sans = Work_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
  fallback: ['sans-serif'],
  subsets: ['latin', 'latin-ext']
});
const snippet = Snippet({
  weight: '400',
  style: 'normal',
  preload: true,
  fallback: ['monospace'],
  subsets: ['latin']
});
const trigong = Trirong({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
  fallback: ['serif'],
  subsets: ['latin', 'latin-ext']
});

const fonts = {
  text: work_sans.style.fontFamily,
  heading: snippet.style.fontFamily,
  display: trigong.style.fontFamily,
}

export default fonts;
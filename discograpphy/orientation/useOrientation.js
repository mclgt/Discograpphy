import { useWindowDimensions } from 'react-native';

export default function useOrientation() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  return isPortrait ? 'PORTRAIT' : 'LANDSCAPE';
}

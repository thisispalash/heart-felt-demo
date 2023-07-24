import { Heading } from "@chakra-ui/react";


export default function BigBrand({ ...props }) {

  return (
    <Heading
      w='full'
      pt={8} px={12}
      color='green'
      opacity={0.7}
      fontSize='6xl'
      textAlign='left'
      position='absolute'
    >
      heart-felt <br />
      productions <br />
      inc.
    </Heading>
  );
}
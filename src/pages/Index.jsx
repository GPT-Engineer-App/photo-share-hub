import { Container, Text, VStack, Heading, Box, Image, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [photos, setPhotos] = useState([
    { id: 1, src: "/images/photo1.jpg", alt: "Photo 1" },
    { id: 2, src: "/images/photo2.jpg", alt: "Photo 2" },
    { id: 3, src: "/images/photo3.jpg", alt: "Photo 3" },
  ]);

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to PhotoShare</Heading>
        <Text fontSize="xl">A social media platform for sharing your favorite photos.</Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {photos.map(photo => (
            <Box key={photo.id} boxShadow="md" borderRadius="md" overflow="hidden">
              <Image src={photo.src} alt={photo.alt} />
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
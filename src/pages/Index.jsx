import { Box, Container, Flex, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaChartLine, FaGlobe, FaHome, FaRegNewspaper, FaComments } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="#F3F2EF"> {/* Updated background color */}
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link href="#" fontSize="xl" fontWeight="bold">Financial Times</Link>
          <HStack spacing={4}>
            <Link href="#"><FaHome /> Home</Link>
            <Link href="#"><FaChartLine /> Markets</Link>
            <Link href="#"><FaGlobe /> World</Link>
            <Link href="#"><FaRegNewspaper /> Opinion</Link>
            <Link href="#"><FaComments /> More</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={4} bg="#F3F2EF"> {/* Updated background color */}
        {/* Latest News Articles */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={6} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 1</Heading>
                <Text mt={2}>This is a summary of the news article. It provides a brief overview of the content.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 2</Heading>
                <Text mt={2}>This is a summary of the news article. It provides a brief overview of the content.</Text>
              </Box>
            </Box>
            {/* Add more news articles as needed */}
          </VStack>
        </Box>

        {/* Sidebar for Financial Data */}
        <Box flex="1" p={4} bg="gray.100" borderRadius="lg" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Financial Data</Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="md">Stock Market</Heading>
              <Text mt={2}>Dow Jones: 34,000.00 (+0.50%)</Text>
              <Text>NASDAQ: 14,000.00 (+0.75%)</Text>
              <Text>S&P 500: 4,500.00 (+0.60%)</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Currency Exchange</Heading>
              <Text mt={2}>USD/EUR: 0.85</Text>
              <Text>USD/GBP: 0.75</Text>
              <Text>USD/JPY: 110.00</Text>
            </Box>
            {/* Add more financial data as needed */}
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
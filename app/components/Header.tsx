import { Box, Flex, Heading, HStack } from "@chakra-ui/react"
import { Link as ChakraLink } from "@chakra-ui/react"
import { Link } from "react-router"

export function Header() {
  return (
    <Box as="header" bg="white" boxShadow="sm" py={4} px={6}>
      <Flex justify="space-between" align="center" maxW="100%">
        <Heading as="h1" size="lg" color="teal.600">
          🍳 Recipe Manager
        </Heading>
        <HStack gap={4}>
          <ChakraLink asChild>
            <Link to="/">Home</Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link to="/recipes">Recipes</Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link to="/recipes/new">+ New Recipe</Link>
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  )
}

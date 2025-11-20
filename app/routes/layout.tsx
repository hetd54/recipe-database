import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { Outlet } from "react-router"
import { Header } from "~/components/Header"
import { Sidebar } from "~/components/Sidebar"
import { Box, Flex } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Flex minH="100vh" direction="column">
        <Header />
        <Flex flex={1}>
          <Sidebar />
          <Box as="main" flex={1} p={6} bg="gray.50">
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

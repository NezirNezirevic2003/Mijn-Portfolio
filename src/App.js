import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";
import {
  BrowserRouter,
  Link as ReactRouterLink,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <BrowserRouter>
      <Container maxWidth="container.md">
        {" "}
        <Flex>
          <Box p="2">
            <Link as={ReactRouterLink} to="/">
              <Heading mt={2} size="md">
                NEZIREVIC
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <Box ml={2} p="2">
            <Link mr={3} as={ReactRouterLink} to="/aboutme">
              About me
            </Link>
            <Link mr={3} as={ReactRouterLink} to="/projects">
              Projecten
            </Link>
            <IconButton
              size="md"
              isRound
              aria-label="Toggle dark mode"
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </Box>
        </Flex>
        <Divider />
      </Container>
      <Route path="/projects" component={Projects}></Route>
      <Route path="/aboutme" component={AboutMe}></Route>
      <Route path="/" component={Home} exact></Route>
    </BrowserRouter>
  );
}

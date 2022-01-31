import { Container, Text, Avatar, Box, Button } from "@chakra-ui/react";
import React from "react";

export default function AboutMe() {
  return (
    <Container maxWidth="container.md" centerContent>
      <Text mb={3} fontWeight={500} fontSize={30} textAlign="center">
        {" "}
        About Me
      </Text>
      <Avatar
        height={250}
        width={250}
        src="https://avatars.githubusercontent.com/u/62933394?v=4"
        alt="nezir"
      />
      <Box mt={3} p={5} shadow="md" borderRadius={10} borderWidth="1px">
        <Text fontSize={20}>
          Hallo, Mijn naam is Nezir Nezirevic ik ben een student op Techniek
          College Rotterdam en een Software Developer. Ik ben enorm gemotiveerd
          om nieuwe dingen te leren en daar sta ik altijd open voor.
        </Text>
      </Box>
      <Button
        mt={3}
        onClick={() => window.open("mailto:nezirnezirevic310@gmail.com")}
      >
        Contacteer me
      </Button>
    </Container>
  );
}

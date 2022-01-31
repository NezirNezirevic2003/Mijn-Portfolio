import {
  Container,
  Text,
  Box,
  Spinner,
  Badge,
  Grid,
  Link,
} from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Projects() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/NezirNezirevic2003/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRepos(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  const Repo = ({ title, badge, href, ...rest }) => {
    Repo.propTypes = {
      title: PropTypes.string.isRequired,
      badge: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    };
    return (
      <Box
        mt={1}
        p={5}
        shadow="md"
        borderRadius={10}
        borderWidth="1px"
        {...rest}
      >
        <Link href={href}>
          <Text mb={3} fontWeight={500} fontSize={20}>
            {title}
          </Text>
        </Link>
        <>{badge}</>
      </Box>
    );
  };
  if (error) {
    return <div>{error}</div>;
  } else if (!isLoaded) {
    return (
      <Container maxWidth="container.md" centerContent>
        <Spinner mt={3}></Spinner>
      </Container>
    );
  } else
    return (
      <Container maxWidth="container.md">
        <Box p={2}>
          <Text mb={3} fontWeight={500} fontSize={30} textAlign="center">
            MIJN PROJECTEN
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {repos.map((repo) => (
              <Repo
                key={repo.id}
                href={repo.html_url}
                title={repo.name}
                badge={
                  repo.language === "TypeScript" ? (
                    <Badge colorScheme="blue">{repo.language}</Badge>
                  ) : repo.language === "JavaScript" ? (
                    <Badge colorScheme="yellow">{repo.language}</Badge>
                  ) : repo.language === "PHP" ? (
                    <Badge colorScheme="purple">{repo.language}</Badge>
                  ) : (
                    <Badge>{repo.language}</Badge>
                  )
                }
              />
            ))}
          </Grid>
        </Box>
      </Container>
    );
}

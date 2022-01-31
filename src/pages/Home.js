import {
  Badge,
  Box,
  Container,
  Grid,
  Progress,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { DiPhp, DiJavascript1, DiReact, DiGitBranch } from "react-icons/di";
import React from "react";
import { Icon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

export default function Home() {
  const Skill = ({ icon, title, skillProgress, color, ...rest }) => {
    Skill.propTypes = {
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      skillProgress: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    };
    return (
      <Box p={5} shadow="md" borderRadius={10} borderWidth="1px" {...rest}>
        <Icon fontSize={70} as={icon}></Icon>
        <Text mb={3} fontWeight={500} fontSize={20}>
          {title}
        </Text>
        <Progress colorScheme={color} size="md" value={skillProgress} />
      </Box>
    );
  };
  return (
    <Container maxWidth="container.md">
      <Box textAlign="center" p={2}>
        <Text color="gray.500" fontWeight={400} fontSize={35}>
          Hallo ik ben,
        </Text>
        <Text mt="-30px" color="black.300" fontWeight={800} fontSize={85}>
          NEZIR
        </Text>
        <Badge>Fullstack Developer</Badge>
        <Spacer />
        <Badge>Student</Badge>
      </Box>
      <Text p={5} fontWeight={700} fontSize={35}>
        MIJN SKILLS:
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Skill icon={DiPhp} title="PHP" color="purple" skillProgress={70} />
        <Skill
          icon={DiJavascript1}
          title="Javascript"
          color="yellow"
          skillProgress={70}
        />
        <Skill icon={DiReact} title="ReactJS" color="blue" skillProgress={80} />
        <Skill
          icon={DiGitBranch}
          title="Git"
          color="blackAlpha"
          skillProgress={90}
        />
      </Grid>
    </Container>
  );
}

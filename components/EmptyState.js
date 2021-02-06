import React from "react";
import { useColorMode, Heading, Flex, Text, Button } from "@chakra-ui/react";
// import { SmallAddIcon } from '@chakra-ui/icons'
import DashboardShell from "./DashboardShell";

const EmptyState = () => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  return (
    <DashboardShell>
      <Flex
        bg={bgColor[colorMode]}
        width="100%"
        borderRadius="8px"
        p={16}
        justify="center"
        direction="column"
        align="center"
      >
        <Heading mb={2} size="md" as="h2">
          You haven't added any book to your shelf
        </Heading>
        <Text mb={4}>Welcome let get started</Text>
        <Button fontWeight="medium" maxW="200px" variant="solid" size="md">
          Add your first book
        </Button>
      </Flex>
    </DashboardShell>
  );
};

export default EmptyState;

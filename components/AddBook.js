import React from "react";

import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
// import { SmallAddIcon } from '@chakra-ui/icons'
import DashboardShell from "./DashboardShell";
import Addbook from "pages/addbook";
import { SearchIcon } from "@chakra-ui/icons";

const AddBook = () => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  return (
    <DashboardShell>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        ></Flex>

        <Heading letterSpacing="tight" mb={2} as="h1" size="md">
          Search a book to add
        </Heading>
        <InputGroup mb={4} mr={4} w="100%">
          <Input
            aria-label="Search by title"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search by title"
          />
          <InputRightElement>
            <SearchIcon color="gray.300" />
          </InputRightElement>
        </InputGroup>
      </Stack>
    </DashboardShell>
  );
};

export default AddBook;

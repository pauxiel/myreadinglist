import React from "react";
import { useColorMode, Button, Flex, Box, Avatar } from "@chakra-ui/react";
import NextLink from "next/link";
import { useAuth } from "@/lib/auth";
// import { SmallAddIcon } from '@chakra-ui/icons'
import styled from "@emotion/styled";
import DarkModeSwitch from "@/components/DarkModeSwitch";

const DashboardShell = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };

  const color = {
    light: "black",
    dark: "white",
  };
  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;
  const auth = useAuth();
  // console.log(auth.user);
  return (
    <>
      <StickNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 8]}
        py={2}
        mt={8}
        mb={[null, 0, 8]}
        mx="auto"
      >
        <Avatar size="sm" src={auth.user.photoURL} />
        <Box>
          <NextLink href="/dashboard" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              My reading list
            </Button>
          </NextLink>
          <NextLink href="/addbook" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Addd a book
            </Button>
          </NextLink>
        </Box>

        <DarkModeSwitch />
      </StickNav>

      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={(0, 8, 8)}
      >
        {children}
      </Flex>
    </>
  );
};

export default DashboardShell;

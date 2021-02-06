import Head from "next/head";
import Container from "@/components/Container";
import { useAuth } from "@/lib/auth";

import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Code,
  Button,
} from "@chakra-ui/react";

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      h="100vh"
      justify="center"
    >
      <Head>
        <title>My reading list</title>
      </Head>

      {/* <Icon name="logo" size="64px" /> */}

      {/* <Text>
        Current user:  <Code>{auth.user ? auth.user.email : 'None' }</Code>
      </Text> */}

      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign out</Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGoogle()}>
          Sign in
        </Button>
      )}
    </Flex>
  );
};

export default Home;

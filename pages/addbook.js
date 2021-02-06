import { useAuth } from "@/lib/auth";
import Head from "next/head";

import { Button, Heading, Text, Code, Icon, Flex } from "@chakra-ui/react";
import AddBook from "@/components/AddBook";

const Addbook = () => {
  const auth = useAuth();
  if (!auth.user) {
    return "Loading.....";
  }
  return <AddBook />;
};

export default Addbook;

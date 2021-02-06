import { useAuth } from "@/lib/auth";
import Head from "next/head";

import { Button, Heading, Text, Code, Icon, Flex } from "@chakra-ui/react";
import EmptyState from "@/components/EmptyState";

const Dashboard = () => {
  const auth = useAuth();
  if (!auth.user) {
    return "Loading.....";
  }
  return <EmptyState />;
};

export default Dashboard;

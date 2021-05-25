import { Box, Stack, Text, Link, Icon, Divider } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="sm">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link d="flex" align="center">
              <Icon as={RiDashboardLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link d="flex" align="center">
              <Icon as={RiContactsLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
        <Divider my="6" borderColor="gray.700"></Divider>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="sm">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link d="flex" align="center">
              <Icon as={RiInputMethodLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Formulários
              </Text>
            </Link>
            <Link d="flex" align="center">
              <Icon as={RiGitMergeLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

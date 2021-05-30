import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luiz Henrique Delfino</Text>
          <Text color="gray.300" fontSize="small">
            7henrique18@gmail.com.br
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Luiz Henrique"
        src="https://github.com/lui7henrique.png"
      ></Avatar>
    </Flex>
  );
}

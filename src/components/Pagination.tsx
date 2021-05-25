import { HStack, Button, Box} from "@chakra-ui/react";

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" spacing="6" align="center">
      <Box><strong>0</strong> - <strong>10</strong> de <strong>100</strong></Box>
      <HStack>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: "pink.500",
            cursor: "default",
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bgColor: "gray.500",
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bgColor: "gray.500",
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bgColor: "gray.500",
          }}
        >
          4
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          bg="gray.700"
          width="4"
          _hover={{
            bgColor: "gray.500",
          }}
        >
          5
        </Button>
      </HStack>
    </HStack>
  );
}

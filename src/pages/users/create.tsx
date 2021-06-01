import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  office: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório.").email("E-mail inválido."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(6, "No mínimo, 6 caractéres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam coincidir"),
  office: yup.string().required("Cargo obrigatório."),
});

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createUserFormSchema) });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="md" fontWeight="bold" color="gray.400">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700"></Divider>
          <VStack>
            <SimpleGrid minChildWidth="240px" spacing={["4", "8"]} w="100%">
              <Input
                name="name"
                type="name"
                label="Nome completo"
                error={errors.name}
                {...register("name")}
              ></Input>
              <Input
                name="email"
                label="E-mail"
                error={errors.email}
                {...register("email")}
              ></Input>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["4", "8"]} w="100%">
              <Input
                name="passwrod"
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              ></Input>
              <Input
                name="passwrod_confirmation"
                type="password"
                label="Confirmação da senha"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              ></Input>
            </SimpleGrid>
            <Input
              name="office"
              label="Cargo"
              type="text"
              error={errors.office}
              {...register("office")}
            ></Input>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha" as="a">
                  Cancelar
                </Button>
              </Link>
              <Button
                colorScheme="pink"
                type="submit"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

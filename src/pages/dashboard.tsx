import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dyanamic from 'next/dynamic'
import { ApexOptions } from "apexcharts";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dyanamic(() => import('react-apexcharts'), {
  ssr: false,
}) 

const options: ApexOptions  ={
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  }, 
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-11-18T00:00:00:00.000Z',
      '2021-11-19T00:00:00:00.000Z',
      '2021-11-20T00:00:00:00.000Z',
      '2021-11-21T00:00:00:00.000Z',
      '2021-11-22T00:00:00:00.000Z',
      '2021-11-23T00:00:00:00.000Z',
      '2021-11-24T00:00:00:00.000Z'
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  { name: 'series1', data: [18, 30, 28, 48, 19, 70, 50]}
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" algin="flex-start">
         <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4"> Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" eight={160}></Chart>
          </Box>
         <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4"> Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" eight={160}></Chart>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

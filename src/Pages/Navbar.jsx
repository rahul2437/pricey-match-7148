import { Icon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "../Components/Login";
import { AuthContext } from "../Context/Auth/AuthContext";
import { BsBagFill } from "react-icons/bs";

export const fashionNavItems = [
  {
    title: "New!",
    path: "/new",
  },
  {
    title: "Dresses",
    path: "/dresses",
  },
  {
    title: "Clothing",
    path: "/clothing",
  },
  {
    title: "Shoes",
    path: "/shoes",
  },
  {
    title: "Accessories",
    path: "/accessories",
  },
  {
    title: "Gifts",
    path: "/gifts",
  },
  {
    title: "Home & Furniture",
    path: "/homefurniture",
  },
  {
    title: "Beauty & Wellness",
    path: "/beautywellness",
  },
  {
    title: "Garden & Outdoor",
    path: "/gardenoutdoor",
  },
  {
    title: "BHLDN Weddings",
    path: "/bhldnwedding",
  },
  {
    title: "Sale",
    path: "/sale",
  },
];

export const homeNavItems = [
  {
    title: "Holiday Décor & More",
    path: "/holidaydecor",
  },
  {
    title: "Furniture",
    path: "/furniture",
  },
  {
    title: "Décor",
    path: "/decor",
  },
  {
    title: "Kitchen & Dining",
    path: "/kitchendining",
  },
  {
    title: "Candles",
    path: "/candles",
  },
  {
    title: "Bedding",
    path: "/bedding",
  },
  {
    title: "Bath",
    path: "/bath",
  },
  {
    title: "Stationery",
    path: "/stationery",
  },
  {
    title: "Kids",
    path: "/kids",
  },
  {
    title: "Outdoor",
    path: "/outdoor",
  },
  {
    title: "Gifts",
    path: "/gifts",
  },
  {
    title: "Sale",
    path: "/homesale",
  },
];

const FashionMapNavbarItems = () => {
  return fashionNavItems.map((item, i) => (
    <Link key={i} to={item.path}>
      {item.title}
    </Link>
  ));
};
const DecorMapNavbarItems = () => {
  return homeNavItems.map((item, i) => (
    <Link key={i} to={item.path}>
      {item.title}
    </Link>
  ));
};

export const Navbar = () => {
  const [navState, setNavState] = useState("fashion");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { handleSubmit, isAuth, handleLogout, token } = useContext(AuthContext);

  return (
    <Box margin="1rem" px={4}>
      <HStack my={2} justify={isAuth ? "space-between" : "flex-end"}>
        {isAuth ? <Text>Token: {token}</Text> : null}
        {isAuth ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button onClick={onOpen}>Sign In / Sign Up</Button>
        )}
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Login />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                handleSubmit();
                onClose();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <HStack justify={"space-between"}>
        <Tabs>
          <TabList>
            <Link to={"/"}>
              <Tab onClick={() => setNavState("fashion")}>ANTHROPOLOGIE</Tab>
            </Link>
            <Link to={"/"}>
              <Tab onClick={() => setNavState("homedecor")}>
                anthro LIVING home
              </Tab>
            </Link>
          </TabList>
        </Tabs>
        <HStack>
          <InputGroup>
            <Input width={80} size="md" placeholder="Search Anthropologie" />
            <InputRightAddon children={<Search2Icon />} />
          </InputGroup>
          <Link to="/cart">
            <Icon boxSize={5} as={BsBagFill} />
          </Link>
        </HStack>
      </HStack>
      <Divider />
      <Stack
        flexDirection={"row"}
        h="50px"
        gap={2}
        alignItems="center"
        justifyContent={"space-evenly"}
      >
        {navState === "fashion" ? (
          <FashionMapNavbarItems />
        ) : (
          <DecorMapNavbarItems />
        )}
      </Stack>
      <Divider />
    </Box>
  );
};

import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    List,
    ListIcon,
    ListItem,
    Spacer,
    Link,
    Center,
    Tag,
    TagLabel,
    SimpleGrid,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
    Text,
    VStack,
    Stack,
    Image,
    Divider,
    ButtonGroup,
    IconButton,
} from "@chakra-ui/react";
import { IoLogoTwitter, IoMail, IoCheckmarkCircleSharp } from "react-icons/io5";
import Head from "next/head";

export default function Home() {
    return (
        <main style={{ background: "#0B0B0B" }}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <title>Humming World</title>
            </Head>
            <Container maxW="7xl" pb="10rem" px="6">
                <nav style={{ borderBottom: "1px solid #3E4044" }}>
                    <Flex alignItems="center" pt="6" pb="4">
                        <Box>
                            <Image src="/new/logo-5.png" w="8rem" />
                        </Box>
                        <Spacer />
                        <Box display="flex">
                            <Link
                                href="https://twitter.com/hummingdotworld"
                                isExternal
                                color="white"
                                fontSize="lg"
                            >
                                <IoLogoTwitter />
                            </Link>
                            <Link
                                href="mailto:hellohummingworld@gmail.com"
                                isExternal
                                color="white"
                                fontSize="lg"
                                ml="4"
                            >
                                <IoMail />
                            </Link>
                        </Box>
                    </Flex>
                </nav>

                <Box mt="20">
                    <Center>
                        <Tag
                            borderRadius="full"
                            variant="solid"
                            background="rgba(243, 243, 243, 0.05)"
                        >
                            <TagLabel fontWeight="bold" px="2" color="#F3F3F3">
                                Life time access offer! only 100 seats left
                            </TagLabel>
                        </Tag>
                    </Center>
                </Box>

                <Box mt="8" maxW="4xl" mx="auto" textAlign="center">
                    <Center>
                        <Heading
                            as="h1"
                            color="#F3F3F3"
                            size={{ base: "xl", md: "3xl" }}
                        >
                            Keep in touch with the Twitter connections that
                            matter
                        </Heading>
                    </Center>
                    <Center mt="8" maxW="2xl" mx="auto">
                        <Text
                            color="#CFD1D4"
                            fontSize={{ base: "md", md: "lg" }}
                        >
                            Humming world is an AI-powered web app that helps
                            you effortlessly manage communications on Twitter.
                        </Text>
                    </Center>
                </Box>

                <Box maxW="xl" mx="auto" mt="10">
                    <Center>
                        <Button
                            rounded="full"
                            colorScheme="white"
                            bg="rgba(200, 139, 196, 0.7)"
                            variant="solid"
                            textColor="#fff"
                            height="34px"
                            width={{ md: "240px" }}
                            mt={{ base: "4", md: "0" }}
                            _hover={{ bg: "#8d9299" }}
                        >
                            Book life time access today!
                        </Button>
                    </Center>
                </Box>

                <Box
                    py={{ base: 14, md: 28 }}
                    mx="auto"
                    maxW="5xl"
                    boxShadow="lg"
                >
                    <Image src="/new/today-2.png" zIndex="2" />
                </Box>

                <Box
                    pt="8"
                    pb="8"
                    maxW="4xl"
                    mx="auto"
                    textAlign={{ base: "left", md: "center" }}
                >
                    <Center>
                        <Heading as="h2" color="#F3F3F3">
                            When you use it right, Twitter &#8827; LinkedIn.
                        </Heading>
                    </Center>
                    <Center mt="8" maxW="3xl" mx="auto">
                        <VStack>
                            <Text color="#CFD1D4" fontSize="lg">
                                Your Twitter profile shows people what you do,
                                how you think, and who you know. If used
                                correctly, your Twitter network can supercharge
                                your professional life in ways that LinkedIn can
                                only dream of.
                            </Text>
                            <Text color="#CFD1D4" fontSize="lg">
                                Our goal at Humming World is to make that a
                                reality.{" "}
                            </Text>
                        </VStack>
                    </Center>
                </Box>

                <Box
                    bg="rgba(212, 212, 212, 0.03)"
                    p="4"
                    mt={{ base: "2rem", md: "28" }}
                    rounded="md"
                >
                    <Box mt="8" maxW="4xl" mx="auto" textAlign="center">
                        <Center>
                            <Heading as="h2" color="#F3F3F3">
                                Humming World helps you reach out to the right
                                people at the right time with the right message.
                            </Heading>
                        </Center>
                    </Box>

                    <Box py="16" mx="auto" maxW="5xl" boxShadow="lg">
                        <Image src="/new/people-2.gif" zIndex="2" />
                    </Box>
                </Box>

                <Box mt="28">
                    <SimpleGrid
                        columns={{ base: 1, md: 3 }}
                        spacingX="60px"
                        spacingY={{ base: "14", md: "20" }}
                        maxW="5xl"
                        mx="auto"
                    >
                        <Box display="flex">
                            <Box>
                                <Image src="/new/timed-reminders.png" />
                            </Box>
                            <Box pl="4">
                                <Text color="#FFFFFF">Timed reminders</Text>
                                <Text pt="1" color="#CFD1D4">
                                    Never miss a follow up with reminders
                                </Text>
                            </Box>
                        </Box>

                        <Box display="flex">
                            <Box>
                                <Image src="/new/frictionless-search.png" />
                            </Box>
                            <Box pl="4">
                                <Text color="#fff">Frictionless search</Text>
                                <Text pt="1" color="#cfd1d4">
                                    Easily comb through details of your previous
                                    interactions
                                </Text>
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box>
                                <Image src="/new/grouped-contacts.png" />
                            </Box>
                            <Box pl="4">
                                <Text color="#fff">Grouped contacts</Text>
                                <Text pt="1" color="#cfd1d4">
                                    Create specific groups for different use
                                    cases
                                </Text>
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box>
                                <Image src="/new/ai-message.png" />
                            </Box>
                            <Box pl="4">
                                <Text color="#fff">
                                    AI-powered message writer
                                </Text>
                                <Text pt="1" color="#cfd1d4">
                                    Write thoughtful, context-driven messages
                                    with the help of AI
                                </Text>
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box>
                                <Image src="/new/interaction-history.png" />
                            </Box>
                            <Box pl="4">
                                <Text color="#fff">Interaction history</Text>
                                <Text pt="1" color="#cfd1d4">
                                    View context of your previous interactions
                                    before you reach out
                                </Text>
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box>
                                <Image src="/new/built-for-speed.png" />
                            </Box>
                            <Box pl="4">
                                <Text color="#fff">Built for speed</Text>
                                <Text pt="1" color="#cfd1d4">
                                    Instantly import & sync people from Twitter
                                </Text>
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Box>

                <Box mt={{ base: "20", md: "28" }} maxW="6xl" mx="auto">
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        flexDirection={{ base: "column-reverse", md: "row" }}
                    >
                        <Box maxW={{ md: "34%" }}>
                            <Heading color="#F3F3F3">
                                Tailored reminders
                            </Heading>
                            <Text color="#CFD1D4" pt="4">
                                Humming World studies your Twitter relationships
                                (likes, replies, mutual followers) and reminds
                                you via DM to reach out to someone when the time
                                is right.
                            </Text>
                        </Box>
                        <Box maxW={{ md: "50%" }} py={{ base: 8 }}>
                            <Image src="/new/reminders-2.png" />
                        </Box>
                    </Flex>
                </Box>

                <Box mt={{ base: "20", md: "28" }} maxW="6xl" mx="auto">
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        flexDirection={{
                            base: "column-reverse",
                            md: "row-reverse",
                        }}
                    >
                        <Box maxW={{ md: "34%" }}>
                            <Heading color="#F3F3F3">
                                Context at your fingertips
                            </Heading>
                            <Text color="#CFD1D4" pt="4">
                                Your contacts tab helps you find out who you are
                                losing touch and your connections strength. So
                                you can reach out accordingly.
                            </Text>
                        </Box>
                        <Box maxW={{ md: "50%" }} py={{ base: 8 }}>
                            <Image src="new/context-2.png" />
                        </Box>
                    </Flex>
                </Box>

                <Box mt={{ base: "20", md: "28" }} maxW="6xl" mx="auto">
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        flexDirection={{ base: "column-reverse", md: "row" }}
                    >
                        <Box maxW={{ md: "34%" }}>
                            <Heading color="#F3F3F3">
                                AI-powered messaging assistance
                            </Heading>
                            <Text color="#CFD1D4" pt="4">
                                Our AI-powered message writer helps you craft
                                thoughtful and context-driven messages tailored
                                to the context of your relationship with a
                                specific contact.
                            </Text>
                        </Box>
                        <Box maxW={{ md: "50%" }} py={{ base: 8 }}>
                            <Image src="new/ai-2.png" />
                        </Box>
                    </Flex>
                </Box>

                <Box mt={{ base: "20", md: "28" }}>
                    <Heading textAlign="center" color="#F3F3F3">
                        Pricing
                    </Heading>
                    <Text
                        textAlign="center"
                        color="#A594FD"
                        mt="4"
                        fontWeight="bold"
                    >
                        EARLY BIRD OFFER
                    </Text>
                    <Box
                        border="1px solid #3E4044"
                        maxW="2xl"
                        mx="auto"
                        p="10"
                        rounded="xl"
                        mt="8"
                        color="#F3F3F3"
                    >
                        <Center flexDirection="column">
                            <Heading as="h4">Life time access</Heading>
                            <Text fontSize="6xl" mt="6">
                                $20
                                <span style={{ fontSize: "20px" }}>
                                    / life time access
                                </span>
                            </Text>
                            <List mt="6">
                                <ListItem>
                                    <ListIcon as={IoCheckmarkCircleSharp} />
                                    One twitter account
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={IoCheckmarkCircleSharp} />
                                    Easy import & sync
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={IoCheckmarkCircleSharp} />
                                    Timely reminders to reconnect
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={IoCheckmarkCircleSharp} />
                                    Get organized with search
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={IoCheckmarkCircleSharp} />
                                    Write messages with AI
                                </ListItem>
                            </List>
                            <Button
                                rounded="full"
                                colorScheme="white"
                                bg="rgba(200, 139, 196, 0.7)"
                                variant="solid"
                                textColor="#fff"
                                height="34px"
                                width={{ base: "full", md: "240px" }}
                                mt={{ base: "8", md: "8" }}
                                _hover={{ bg: "#8d9299" }}
                            >
                                Book life time access today!
                            </Button>
                        </Center>
                    </Box>
                </Box>

                <Box
                    mt={{ base: "20", md: "40" }}
                    maxW="4xl"
                    mx="auto"
                    color="#F3F3F3"
                >
                    <Heading textAlign="center">
                        Frequently Asked Questions
                    </Heading>
                    <Accordion mt="16" allowToggle>
                        <AccordionItem py="2">
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        What is Humming World?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} color="#CFD1D4">
                                Humming World helps you build and maintain relationships with your professional circle. It uses AI to identify an identity with which you might not have been in touch for a while.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem py="2">
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        When can I try Humming World?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            We are currently in the development phase and trying our best to make it live as soon as possible. You will be notified when we release our private beta version.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Container>
            <Container
                as="footer"
                role="contentinfo"
                maxW="full"
                color="white"
                px={{ base: "2rem", md: "4rem" }}
                py="8"
                bg="rgba(212, 212, 212, 0.03)"
            >
                <Stack
                    spacing="8"
                    direction={{
                        base: "column",
                        md: "row",
                    }}
                    justify="space-between"
                    py={{
                        base: "12",
                        md: "16",
                    }}
                >
                    <Stack
                        spacing={{
                            base: "6",
                            md: "8",
                        }}
                        align="start"
                    >
                        {/* <Logo /> */}
                        <Image src="/new/logo-5.png" w="10rem" />
                        <Text color="muted">
                            Build thoughtful professional connections with the
                            people you care
                        </Text>
                    </Stack>
                    <Stack
                        direction={{
                            base: "column-reverse",
                            md: "column",
                            lg: "row",
                        }}
                        spacing={{
                            base: "12",
                            md: "8",
                        }}
                    >
                        <Stack direction="row" spacing="8">
                            <Stack spacing="4" minW="36" flex="1">
                                <Text
                                    fontSize="sm"
                                    fontWeight="semibold"
                                    color="subtle"
                                >
                                    Company
                                </Text>
                                <Stack spacing="3" shouldWrapChildren>
                                    <Button variant="link">Changelog</Button>
                                </Stack>
                            </Stack>
                            <Stack spacing="4" minW="36" flex="1">
                                <Text
                                    fontSize="sm"
                                    fontWeight="semibold"
                                    color="subtle"
                                >
                                    Legal
                                </Text>
                                <Stack spacing="3" shouldWrapChildren>
                                    <Button variant="link">Privacy</Button>
                                    <Button variant="link">Terms</Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Divider />
                <Stack
                    pt="8"
                    pb="12"
                    justify="space-between"
                    direction={{
                        base: "column-reverse",
                        md: "row",
                    }}
                    align="center"
                >
                    <Text fontSize="sm" color="subtle">
                        &copy; {new Date().getFullYear()} Humming World. All
                        rights reserved.
                    </Text>
                    <ButtonGroup variant="ghost">
                        <IconButton
                            as="a"
                            href="https://twitter.com/hummingdotworld"
                            aria-label="Twitter"
                            target="_blank"
                            _hover={{ bg: "#8d9299" }}
                            icon={<IoLogoTwitter fontSize="1.25rem" />}
                        />
                    </ButtonGroup>
                </Stack>
            </Container>
        </main>
    );
}

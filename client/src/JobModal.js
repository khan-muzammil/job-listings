import {
	Box,
	Button,
	Flex,
	Image,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react"
import React from "react"

export default function JobModal({ isOpen, onClose, job }) {
	/* const { isOpen, onOpen, onClose } = useDisclosure() */
	if (!job) {
		return <div />
	}

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
				<ModalOverlay />
				<ModalContent px={8}>
					<ModalHeader>
						<Flex>
							<Image
								boxSize="50px"
								objectFit="contain"
								src={job.company_logo}
								alt={`${job.company} logo`}
								mr="4"
							/>
							<Box>
								{job.title}
								<Text fontSize="sm">{job.company}</Text>
							</Box>
						</Flex>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						dangerouslySetInnerHTML={{ __html: job.description }}
					></ModalBody>

					<ModalFooter>
						<Button colorScheme="red" mr={3} onClick={onClose}>
							Close
						</Button>

						<Button
							backgroundColor="#00b074"
							_hover={{
								backgroundColor: "#108d62",
								textDecoration: "none",
							}}
						>
							<Link
								href={job.url}
								color="#fff"
								_hover={{
									textDecoration: "none",
								}}
								isExternal
							>
								Apply
							</Link>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

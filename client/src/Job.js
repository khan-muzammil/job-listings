import {
	Box,
	Flex,
	Heading,
	Image,
	Spacer,
	Stack,
	Text,
} from "@chakra-ui/react"
import React from "react"

export default function Job({ job, onClick }) {
	return (
		<Box
			p={8}
			rounded="md"
			shadow="md"
			onClick={onClick}
			style={{ cursor: "pointer" }}
		>
			<Flex>
				<Image
					boxSize="100px"
					objectFit="contain"
					src={job.company_logo}
					alt={`${job.company} logo`}
					mr="4"
				/>
				<Stack spacing={4}>
					<Heading
						as="h3"
						size="md"
						letterSpacing="tight"
						lineHeight="tall"
						w="md"
					>
						{job.title}
					</Heading>
					<Text fontSize="sm">{job.company}</Text>
					<Text fontSize="sm">{job.location}</Text>
				</Stack>
				<Spacer />
				<Text fontSize="sm">
					{job.created_at.split(" ").slice(0, 3).join(" ")}
				</Text>
			</Flex>
		</Box>
	)
}

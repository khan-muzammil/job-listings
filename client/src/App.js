import { Box, Container, Heading, Stack } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import "./App.css"
import Jobs from "./Jobs"

const JOBS_URL = "http://localhost:3001/jobs"
/* async function fetchJobs(updateCb) {
	const res = await fetch(JOBS_URL)
	const jobs = await res.json()

	updateCb(jobs)
	console.log("setjobs", jobs)
}
 */
async function fetchJobs(updateCb) {
	const res = await fetch(JOBS_URL)
	let json = await res.json()

	updateCb(json)
}

function App() {
	/* const [jobList, setJobs] = useState([])
	useEffect(async () => {
		await fetchJobs(setJobs)
		console.log("useEffect running", jobList)
  }, []) */
	const [jobList, updateJobs] = useState([])

	useEffect(() => {
		fetchJobs(updateJobs)
	}, [])
	return (
		<div className="App">
			<Box>
				<Container maxW={"5xl"}>
					<Stack as={Box} textAlign={"center"} py={8} px={4} spacing={6} mt={8}>
						<Heading size={"2xl"} lineHeight={"1.2"}>
							Entry level Software jobs compiled from various sources.
						</Heading>
					</Stack>
					<Jobs jobList={jobList} />
				</Container>
			</Box>
		</div>
	)
}

export default App

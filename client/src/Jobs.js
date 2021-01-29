import { Stack, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import Job from "./Job"
import ReactPaginate from "react-paginate"
import JobModal from "./JobModal"

export default function Jobs({ jobList }) {
	const [currentPage, setCurrentPage] = useState(0)
	const [selectedJob, selectJob] = useState({})
	const { isOpen, onOpen, onClose } = useDisclosure()
	// const [data, setData] = useState([])

	//pagination
	const PER_PAGE = 10
	const offset = currentPage * PER_PAGE
	const currentPageData = jobList.slice(offset, offset + PER_PAGE)
	const pageCount = Math.ceil(jobList.length / PER_PAGE)

	function handlePageClick({ selected: selectedPage }) {
		setCurrentPage(selectedPage)
		scrollToTop()
	}
	function scrollToTop() {
		const c = document.documentElement.scrollTop || document.body.scrollTop
		if (c > 0) {
			window.requestAnimationFrame(scrollToTop)
			window.scrollTo(0, c - c / 8)
		}
	}

	return (
		<Stack spacing={8}>
			{/* <Button onClick={onOpen}>Open Modal</Button> */}
			<JobModal isOpen={isOpen} onClose={onClose} job={selectedJob} />
			{currentPageData &&
				currentPageData.map((job, i) => {
					return (
						<Job
							key={i}
							job={job}
							onClick={() => {
								onOpen()
								selectJob(job)
							}}
						/>
					)
				})}
			<ReactPaginate
				previousLabel={"← Previous"}
				nextLabel={"Next →"}
				pageCount={pageCount}
				onPageChange={handlePageClick}
				containerClassName={"pagination"}
				previousLinkClassName={"pagination__link"}
				nextLinkClassName={"pagination__link"}
				disabledClassName={"pagination__link--disabled"}
				activeClassName={"pagination__link--active"}
			/>
		</Stack>
	)
}

const fetch = require("node-fetch")
const redis = require("redis")
const client = redis.createClient()
const { promisify } = require("util")
const setAsync = promisify(client.set).bind(client)

const baseURL = "https://jobs.github.com/positions.json"

async function fetchGithub() {
	console.log("fetching github")

	let resultCount = 1,
		onPage = 0
	const allJobs = []

	// fetch all pages
	while (resultCount > 0) {
		const res = await fetch(`${baseURL}?page=${onPage}`)
		const jobs = await res.json()
		allJobs.push(...jobs)
		resultCount = jobs.length
		console.log("got", resultCount, "jobs")
		onPage++
	}

	//filter jobs
	const jrJobs = allJobs.filter((job) => {
		let jobTitle = job.title.toLowerCase()
		if (
			jobTitle.includes("senior") ||
			jobTitle.includes("sr.") ||
			jobTitle.includes("manager") ||
			jobTitle.includes("lead") ||
			jobTitle.includes("mid") ||
			jobTitle.includes("architect")
		) {
			return false
		}
		return true
	})

	//set in redis
	const success = await setAsync("github", JSON.stringify(jrJobs))
	console.log("got", allJobs.length, "jobs total")
	console.log("filtered to ", jrJobs.length)
	console.log({ success })
}

module.exports = fetchGithub

#Job listing

- Software jobs fetched through the github jobs api via cron worker.
- Frontend made with chakra-ui, and react-paginate for pagination.
- Fetched jobs are filtered and cached in redis, then served from the /api/jobs endpoint.

### Installation

- You need to have redis installed on your local machine to run this.

1. `npm install`
2. `cd client`
3. `npm install`
4. start redis server
5. Start express server and react app

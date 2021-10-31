1. Build mongodb `docker run -d -p 27017:27017 -v <local_directory>:/data/db --name wines-mongo mongo:latest`
2. `.env` contains
```dotenv
PORT=3000
DB_HOST=localhost
DB_PORT= 27017

```
3. Run backend `npm run dev`

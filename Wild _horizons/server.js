import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { sendJSONresponse } from "./utils/sendJSONresponse.js";

const PORT = 5000;

const server = http.createServer(async (req, res) => {
   const destination = await getDataFromDB();
   const notFound = { error: "not found", message: "The requested route does not exist" };

   if (req.url === "/api" && req.method === "GET") {
      sendJSONresponse(res, 200, destination);
   } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
      const continent = req.url.split("/").pop();
      const filteredData = destination.filter((destination) => {
         return destination.continent.toLowerCase() === continent.toLowerCase();
      });
      sendJSONresponse(res, 200, filteredData);
   } else {
      sendJSONresponse(res, 404, notFound);
   }
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));

import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { sendJSONresponse } from "./utils/sendJSONresponse.js";
import { getDataByPathParams } from "./utils/getDataByPathParams.js";
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'
import { URL } from "node:url";

const PORT = 5000;

const server = http.createServer(async (req, res) => {
   const destination = await getDataFromDB();
   const notFound = { error: "not found", message: "The requested route does not exist" };

   const urlObj = new URL(req.url, `https://${req.headers.host}`)
   const queryObj = Object.fromEntries(urlObj.searchParams)

   if (urlObj.pathname === "/api" && req.method === "GET") {
      let filteredData = getDataByQueryParams(destination, queryObj)
      sendJSONresponse(res, 200, filteredData);
   } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
      const continentName = req.url.split("/").pop();
      const continentData = getDataByPathParams(destination, "continent", continentName);
      sendJSONresponse(res, 200, continentData);
   } else if (req.url.startsWith("/api/country") && req.method === "GET") {
      const countryName = req.url.split("/").pop();
      const countryData = getDataByPathParams(destination, "country", countryName);
      sendJSONresponse(res, 200, countryData);
   } else {
      sendJSONresponse(res, 404, notFound);
   }
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));

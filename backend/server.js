const express = require("express");
const https = require("https");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for frontend requests

// Route to summarize an article
app.get("/summarize", (req, res) => {
  const url = req.query.url; // Access the URL from query parameters

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  // Options for the RapidAPI request
  const options = {
    method: "GET",
    hostname: "article-extractor-and-summarizer.p.rapidapi.com",
    path: `/summarize?url=${encodeURIComponent(url)}&lang=en&engine=2`,
    headers: {
      "x-rapidapi-key": "a44831afc3msheabb24711e15045p144f26jsn54ab1a42bf51",
      "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com"
    }
  };

  // Making the request to the API
  const apiReq = https.request(options, (apiRes) => {
    let data = "";

    // Collect data from the API response
    apiRes.on("data", (chunk) => {
      data += chunk;
    });

    // When response is complete, send it to the client
    apiRes.on("end", () => {
      try {
        const summary = JSON.parse(data);
        res.json(summary); // Send summary data to frontend
      } catch (error) {
        res.status(500).json({ error: "Failed to parse API response" });
      }
    });
  });

  // Handle errors from the API request
  apiReq.on("error", (error) => {
    res.status(500).json({ error: "Error fetching article summary" });
  });

  apiReq.end();
});

// Start the Express server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

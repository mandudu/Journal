import express from 'express'; 
import cors from 'cors'; // this is going to let our frontend talk to our backend
// this is NECESSARY

// now import the file with the API key
import dotenv from 'dotenv';

// now load the API key into this server
dotenv.config();
// btw, in the background, now we have something called "process.env"
// this is a global object that contains all the environment variables
// so we can access the API key like this: process.env.FIREWORKS_API_KEY

const app = express();
const port = 3000; //this can be any number in your mahcine's port range

app.use(cors());
// now our frontend can talk to our backend
app.use(express.json());
// now the server cna read JSON in the request body

// this is called a route
// this is the "backend logic" that the frontend will call over the networking protocol
// in this case, HTTP GET request
app.get('/data', async (req, res) => {

    // we're going to get a response from fireworks and pass it into the respons eobject ot the fronted
    const prompt = "Generate a random inspirational quote that's actually cheeky and slightly insulting - use dry humor";

    try {

        const output = await fetch("https://api.fireworks.ai/inference/v1/completions", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${process.env.FIREWORKS_API_KEY}`
            },
            body: JSON.stringify({
              model: "accounts/fireworks/models/qwen3-30b-a3b",
              max_tokens: 16384,
              top_p: 1,
              top_k: 40,
              presence_penalty: 0,
              frequency_penalty: 0,
              temperature: 0.1,
              prompt: prompt
            })
          });

          if (!output.ok) {
            throw new Error("Failed to fetch data");
          }

          const data = await output.json();
          // what the above does: it converts the response from fireworks into a JSON
          // so we can access the data like this: data.choices[0].text

          const quote = data.choices[0].text;

          res.json({ quote });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    } 

});

app.listen(port, () => {console.log(`Server is running on port ${port}`)});
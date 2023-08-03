import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "kewpie1234";
const yourPassword = "kewpie1234";
const yourAPIKey = "c567ae90-7cd7-4007-9b5b-f419bd0c5201";
const yourBearerToken = "e7245277-9b40-4781-b47d-9c420ea175c9";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
const response = await axios.get("https://secrets-api.appbrewery.com/random");
const result = JSON.stringify(response.data);
res.render("index.ejs", {content:result});
  }catch (error){
console.error("Failed to make request:", error.message);
res.render("index.ejs",{error: error.message,});
  }
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    */
  
    const URL = "https://secrets-api.appbrewery.com/all?page=2";

    try{
      const response = await axios.get(URL, {
        auth: {
          username: yourUsername,
          password: yourPassword,
        },
      });
      const result = JSON.stringify(response.data);
      res.render("index.ejs", {content:result});
        }catch (error){
      console.error("Failed to make request:", error.message);
      res.render("index.ejs",{error: error.message,});
        }
      });


app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  const URL = `https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`;

  try{
    const response = await axios.get(URL);
    const result = JSON.stringify(response.data);
    res.render("index.ejs", {content:result});
      }catch (error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs",{error: error.message,});
      }
    });


app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */

  const URL = "https://secrets-api.appbrewery.com/secrets/42";

  try{
    const response = await  axios.get(URL, {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      },
    });
    const result = JSON.stringify(response.data);
    res.render("index.ejs", {content:result});
      }catch (error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs",{error: error.message,});
      }
    });
  


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

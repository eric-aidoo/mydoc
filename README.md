# mydoc
A simple API service for your healthcare application. Feel free to expand or build on top of it.
This can be modified to fit many different use cases.

# Getting started 
Execute the following checklist to get started:
1. Clone this repo by running " git clone https://github.com/eric-aidoo/mydoc " in your Visual Studio Code (IDE) terminal
2. After cloning, run the following commands in your terminal:
  - npm install --save express bcrypt dotenv
  - npm install --save-dev @babel/cli @babel/core @babel/node @babel/preset-env nodemon
  - Then " npm run dev " to start the server
  
# HEADS UP 
Make sure you have node installed in your machine. Othwerwise the above codes won't work.
  
# Using the API
* Currently, there's only one endpoint (i.e. signup endpoint) for testing purpose. But, you can easily create many different endpoints to fit
your use case. The codes are oversimplified, so it's easy to understand just by following along and reading the comments.

 # If you don't know how to make an API request, see example below:
 
 -------------------------------------------------------------------------------------
   const makeApiCall = async (requestBody) => {
      let endpoint = "http://localhost:3000/api/v1/signup";
      const options = {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)  
      };
      
      try {
        const response = await fetch(endpoint, options);
        
        if (!response.ok) {
            // Your logic goes here
        } 
        const data = await response.json();
        return data;
      } catch {
        return error.message
      }  
  } 
 makeApiCall(yourRequestBodyObject)
----------------------------------------------------------------------------------------- 
 
  Hope this helps! 😉

# Database
There's no database pulgged in this project. However you can easily implement and link your own DB (such as SQL or MongoDb) by again, following along.
  

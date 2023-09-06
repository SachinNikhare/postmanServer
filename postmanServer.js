let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

// let baseURL = "https://repo-8qu2.onrender.com/productServer";
let axios = require("axios");

app.post("/fetch", function (req, res) {
  let { method, fetchURL, data, headerKey1,headerKey2,headerKey3,headerValue1,headerValue2,headerValue3 } = req.body;
  // console.log("METHOD", method);
  // console.log("fetchURL", fetchURL);
  // console.log("data", data);
  if (method === "GET") {
    if(headerKey1||headerKey2||headerKey3){
      axios
      .get(fetchURL,{headers:{[headerKey1]:headerValue1,[headerKey2]:headerValue2,[headerKey3]:headerValue3}})
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (err) {
        if (err.response) {
          let { status, statusText } = err.response;
          // console.log(status, statusText);
          res.status(status).send(statusText);
        } else {
          res.status(401).send(err);
        }
      });  
    }
    else{
      axios
      .get(fetchURL)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (err) {
        if (err.response) {
          let { status, statusText } = err.response;
          // console.log(status, statusText);
          res.status(status).send(statusText);
        } else {
          res.status(401).send(err);
        }
      });
    }
    
  } else if (method == "POST") {
    if(headerKey1||headerKey2||headerKey3){
      axios
      .post(fetchURL, data,{headers:{[headerKey1]:headerValue1,[headerKey2]:headerValue2,[headerKey3]:headerValue3}})
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (err) {
        if (err.response) {
          let { status, statusText } = err.response;
          // console.log(status, statusText);
          res.status(status).send(statusText);
        } else {
          res.status(401).send(err);
        }
      });
    }
    else{
      axios
      .post(fetchURL, data)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (err) {
        if (err.response) {
          let { status, statusText } = err.response;
          // console.log(status, statusText);
          res.status(status).send(statusText);
        } else {
          res.status(401).send(err);
        }
      });
    }
    
  } else if (method == "PUT") {
    if(headerKey1||headerKey2||headerKey3){
      axios
      .put(fetchURL, data)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (err) {
        if (err.response) {
          let { status, statusText } = err.response;
          res.status(status).send(statusText);
        } else {
          res.status(401).send(err);
        }
      });
    }
    else{
      axios
      .put(fetchURL, data,{headers:{[headerKey1]:headerValue1,[headerKey2]:headerValue2,[headerKey3]:headerValue3}})
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (err) {
        if (err.response) {
          let { status, statusText } = err.response;
          res.status(status).send(statusText);
        } else {
          res.status(401).send(err);
        }
      });
    }
    
  } else {
    if(headerKey1||headerKey2||headerKey3){
      axios
      .delete(fetchURL,{headers:{[headerKey1]:headerValue1,[headerKey2]:headerValue2,[headerKey3]:headerValue3}})
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (err) {
        if (err.response) {
          let { status, statusText } = err.response;
          res.status(status).send(statusText);
        } else {
          res.status(401).send(err);
        }
      });  
    }
    else{
      axios
      .delete(fetchURL)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (err) {
        if (err.response) {
          let { status, statusText } = err.response;
          res.status(status).send(statusText);
        } else {
          res.status(401).send(err);
        }
      });    
    }
    
  }
});

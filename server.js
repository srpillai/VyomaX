/*
This is part of LaunchCode Liftoff class for front-end development.
Uses React, Apollo  and GraphQL. Styling by Bootswatch theme.
Uses open Source REST API for rocket, core, capsule, pad, and launch data 
from https://docs.spacexdata.com
Created by Radhakrishnan Pillai for LaunchCode Liftoff
*/


const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
);
  

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

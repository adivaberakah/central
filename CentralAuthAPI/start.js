require("@babel/register")({
    presets: ["@babel/preset-env"]
  });
  
  // Import the rest of our application.
  module.exports = require("./src/index")

//   import serverless from "serverless-http";
//   import express from "express";
//   import graphiql from "graphql-playground-middleware-express";
//   import { ApolloServer, gql } from "apollo-server-express";

// const serverless = require("serverless-http");
// const express = require("express");
// const { graphiql } = require("graphql-playground-middleware-express");
// const { ApolloServer, gql } = require( "apollo-server-express");

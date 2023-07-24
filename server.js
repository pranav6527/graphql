const express = require('express')
const app  =  express()
const {graphqlHTTP} = require('express-graphql')
var { buildSchema } = require("graphql")

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
      return "Hello world!"
    },
  }


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(5500., () => console.log("running..."))
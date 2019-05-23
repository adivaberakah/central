const { prisma } = require("./../generated/prisma-client")

const { ApolloServer, gql } = require("apollo-server-lambda");




const typeDefs = gql `
    type Audit {
        id: Int!
        name: String
        predicateObject: String!
        Date: DateTime!
    }
    scalar DateTime

    type Client {
  id: Int!
  name: String!
  applicationUrl: String!
  clientName: String!
  clientId: String!
}
type Query{
    getAudit(id:Int):Audit
    getAudits:[Audit]
    getClient(id :Int):Client
    getClients:[Client]
    getAuditByPredicateObject(predicateObject:String) :Client
    getAuditsByPredicate(predicateObject:String):[Client]
}

type Mutation{
    createAudit(name: String!):Audit
    updateAudit(name: String!, id:Int!):Audit
    createClient( name: String!, applicationUrl: String!, clientName: String!, clientId: String!):Client
    updateClient( name: String!, applicationUrl: String!, clientName: String!, clientId: String!, id: Int!):Client
}

`

const resolvers ={
    Query:{
        getAudit : (parent, {id}, context) =>{
            return context.prisma.audit({id})
        },
        getAuditByPredicateObject : (parent, {predicateObject}, context) =>{
            return context.prisma.audit({predicateObject})
        },
        getAudits: (parent, args, context) => {
            return context.prisma.audits()
        },
        getAuditsByPredicate: (parent, {predicateObject}, context) => {
            return context.prisma.audits({where:{predicateObject}})
        },
        getClient: (parent, {id}, context) => {
            return context.prisma.client({id})
        },
        getClients: (parent, args, context) => {
            return context.prisma.clients()
        },

        
    },

    Mutation :{
        createAudit :(parent, { name}, context) => {
            return context.prisma.createAudit({id,name})},

        updateAudit :(parent, {id, name, predicateObject,Date}, context) => {
            return context.prisma.updateAudit({data:{id,name, predicateObject, Date},where:{id}})
            },
        
        createClient :(parent, { name, applicationUrl, clientName, clientId}, context) => {
            return context.prisma.createClient({name , applicationUrl, clientName, clientId})
        },
        updateClient :(parent, { name, applicationUrl, id,clientName, clientId}, context) => {
            return context.prisma.createClient({data:{name , applicationUrl, clientName, clientId},where:{id}})
        }
    }
}



const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    
    context: {
        prisma,
      },
    playground: true
});

exports.graphqlHandler = server.createHandler({ 
    cors: {
    origin: '*',
    credentials: true,}}
   
);



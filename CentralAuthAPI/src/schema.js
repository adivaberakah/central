module.exports = {
    typeDefs: `type Audit {
        id: Int!
        name: String
    }
    
    type client {
  id: Int!
  name: String!
  applicationUrl: String!
  clientName: String!
  clientId: String!
}
type Query{
    getAudit(id:Int):Audit
    getAllAudits():[Audit]
    getClient(id :Int):client
    getAllClients():[client]
}

type Mutation{
    createAudit(name: String!):Audit
    updateAudit(name: String!, id:Int!):Audit
    createClient(name: String!, applicationUrl: String!, clientName: String!, clientId: String!):client
    updateClient( name: String!, applicationUrl: String!, clientName: String!, clientId: String!, id:Int):client
    
}
    `
}
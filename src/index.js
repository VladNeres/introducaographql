import {createServer} from '@graphql-yoga/node'

// especificar as operações que existem. ou seja, a nossa interface.
const typeDefs=`
type Query {
    hello: String!
    name:String!
    id: ID!
    localizacao: String!
    idade: Int!
    deMaior:Boolean!
    salario: Float
}`
//2 Imnplementar as operações prometidas na interfaxc. ou seja, escrevere um resolver escreber um resolver pasra cada opereação prometida. um resolver é uma função
const resolvers = {
    Query:{
        hello(){
            return "Hello, GraphQl!!!"

        },
        name(){
            return "João"
        },
        id(){
            return "umid"
        },
        localizacao(){
            return "SP"
        },
        idade(){
            return 29
        },
        deMaior(){
            return true
        },
        salario(){
            return 
        }
    }
}

//3. Construit um serviodor entregando a ele a especificação das operações , mais ainda, a sua implementação.

const server = createServer({
    schema:{
        // typeDesf: typeDefs,
        // resolvers: resolvers
        typeDefs,
        resolvers
    }
})

server.start()
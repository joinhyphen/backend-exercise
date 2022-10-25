import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient('http://localhost:8080/v1/graphql', {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInByb3BZIjoiOGJrY3hsMzdpeXJ2YjJoMTdpbGlqbiJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTY2MjM5ODE5MywiZXhwIjozMTcxMjU1OTgwNzIsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiJ1c2VyMSJ9fQ.ENCyTXSIBSexPT8Qe2RXpc_UCDzbQVlYCISU5kRMU_8'
  }
})


import NextAuth from 'next-auth'

import GitHubProvider from "next-auth/providers/github";

const handler=NextAuth({
providers: [
  GitHubProvider({
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET
  }),
],
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    if (account.provider == "github"){
      //connect to the database
      

      
    }
  }
}
})
export {handler as GET,handler as POST}

import NextAuth from 'next-auth'
import User from '@/models/User';
import GitHubProvider from "next-auth/providers/github";
import connectDB from '@/db/connectDb';


const handler=NextAuth({
providers: [
  GitHubProvider({
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET
  }),
],
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    await connectDB();
    const currentUser=await User.findOne({email:user.email});
    
    if (!currentUser){
      console.log("Hello world");
      const newUser=await User.create({
          email:user.email,
          username:user.email.split("@")[0]

      })
    }
    return true
  },
}

})
export {handler as GET,handler as POST}
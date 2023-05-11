import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "@/database/conn";
import { compare } from "bcryptjs";
import Users from "@/model/Schema";
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                connectMongo().catch(err => { err: "Connection falied" })

                //check user existence
                const result = await Users.findOne({ email: credentials.email })
                if (!result) {
                    throw new Error("No user found with this email, please sign up")
                }

                const checkPassword = await compare(credentials.password, result.password)
                if (!checkPassword || result.email !== credentials.email) {
                    throw new Error("Wrong password!")
                }

                return result
            },
            secret: process.env.NEXT_AUTH_SECRET
        })
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)


// google client id:
// google client secret:
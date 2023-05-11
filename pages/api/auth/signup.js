import connectMongo from "@/database/conn"
import Users from "@/model/Schema";
import { hash } from "bcryptjs";
export default async function handler(req, res) {
    connectMongo().catch(error => res.json({ error: "Connection Failed...!" }))

    if (req.method === "POST") {
        if (!req.body) return res.status(404).json({ error: "No form data" });
        const { username, email, password } = req.body;
        //check duplicate users
        const check_exists = await Users.findOne({ email })
        if (check_exists) return res.status(422).json({ messages: "User Already Exists" })

        //hash password
        Users.create({ username, email, password: await hash(password, 13) })
            .then((data) => {
                res.status(201).json({ status: true, user: data })
            })
            .catch((err) => {
                res.status(404).json({ err })
            })




    } else {
        res.status(500).json({ message: "HTTP method not valid" })
    }
}


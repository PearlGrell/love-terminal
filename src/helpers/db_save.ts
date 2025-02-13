import axios from "axios";
import { Coffee } from "../screens/terminal_screen";

export default async function save_to_db(name: string, date_time: string, coffee: Coffee) {
    try {
        if (!Object.values(Coffee).includes(coffee)) {
            throw new Error("Invalid coffee type");
        }

        await axios.post("https://authentication-prisma.vercel.app/api/valentine-me", {
            name,
            date_time,
            coffee
        });

        return { response: 200 };
    } catch (err) {
        return {
            response: 500,
            message: err instanceof Error ? err.message : "Unknown error"
        };
    }
}

import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export class UserDatabase{
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME,
        },
    });

    private static TABLE_NAME = "User";

    public async createUser(
        id: string,
        email: string,
        password: string
    ): Promise<void> {
        await this.connection
            .insert({
                id,
                email,
                password,
            })
            .into(UserDatabase.TABLE_NAME);
    }

    public async getUserByEmail(email: string): Promise<any> {
        const resultOfQuery = await this.connection.raw(`
            SELECT * FROM User WHERE email = '${email}'
        `)
            return (resultOfQuery[0]);
    }

    public async getUserById(id: string): Promise<any> {
        const resultOfQuery = await this.connection.raw(`
            SELECT * FROM User WHERE id = '${id}'
        `)
        return resultOfQuery[0];
    }
}
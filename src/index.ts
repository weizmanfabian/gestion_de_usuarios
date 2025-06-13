import "reflect-metadata";
import app from './app';
import { AppDataSource } from "./db";

const PORT = 5000;

function main() {
    AppDataSource.initialize()
        .then(() => {
            console.log("Database connection established successfully.");
            app.listen(PORT, () => console.log('Server is running on http://localhost:' + PORT));
        })
        .catch((error) => console.error("Error during Data Source initialization:", error));
}

main();




/*
// To run this code, you need to have TypeScript installed.
// You can install TypeScript globally using npm:

npx tsc
node dist/index.js
// This is a simple TypeScript program that prints "Hello, World!" to the console.
*/


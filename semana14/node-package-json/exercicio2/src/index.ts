import * as fs from "fs";

export {}

let nomeDoArquivo: string = process.argv[2]
let novaTarefa: string = process.argv[3]

fs.appendFileSync(nomeDoArquivo, novaTarefa)
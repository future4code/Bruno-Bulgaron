"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManager = void 0;
const fs = require("fs");
class FileManager {
    writeFile(data) {
        try {
            console.log(this.filePath);
            fs.writeFileSync(this.filePath, JSON.stringify(data));
        }
        catch (_a) {
            console.log("Erro ao criar arquivo");
        }
    }
    readFile() {
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    }
}
exports.FileManager = FileManager;
//# sourceMappingURL=FileManager.js.map
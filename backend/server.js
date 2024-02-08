import connectToDB from "./config/database.js";
import server from "./index.js";
import processEnvVar from "./utils/processEnvVar.js";

const PORT = processEnvVar.PORT;
const BASE_URL = processEnvVar.BASE_URL;


server.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
    connectToDB(BASE_URL)
});
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./eduverse/src/route/Routes.js"; // Đường dẫn cần rõ ràng và có .js

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", Routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from "express";

const PORT = process.env.PORT || 8000;

const app = express();

app.use("/test", (req, res) => {
  res.send("It works!!");
});
app.listen(PORT, () => {
  console.log("server running");
});

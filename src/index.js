import "dotenv/config";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server started on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error);
  });

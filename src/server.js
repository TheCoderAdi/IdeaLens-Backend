require("dotenv").config();
const app = require("./app");
const { connectToDB } = require("./utils/connectToDB");

const PORT = process.env.PORT || 5000;

connectToDB();
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});

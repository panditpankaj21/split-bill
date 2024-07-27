const express = require("express")
const connectDB = require("./db/index")
const {
    createNewGroup,
    updateMembersAmount,
    getAllGroups
} = require("./controllers/group.controller.js")

const app = express();
const PORT=8000;

//Middleware
app.use(express.json());


connectDB("mongodb://127.0.0.1:27017/groups")
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection Failed!!", err)
})

//Routes
app.post('/api/v1/create-group', createNewGroup)
app.post('/api/v1/update-members-amount', updateMembersAmount)
app.get('/api/v1/groups', getAllGroups)
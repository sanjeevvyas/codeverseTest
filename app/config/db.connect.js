import mongoose from "mongoose";

const MongoConnect = () => {
    mongoose.connect("mongodb+srv://jonsjack592:MOi8XCaz2PiEvHM0@cluster0.nhorw.mongodb.net/friendManagementDB?retryWrites=true&w=majority&appName=Cluster0", {}).then(() => {
        console.log("Database connected")

    }).catch(err => {
        console.log(`Database not connected ${err}`)
    })
}
export default MongoConnect


import mongoose from "mongoose";

const postMessage = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type:Date,        
    },
    

},{ collection: 'policeapis' })

const PostMessage = mongoose.model("PostMessage", postMessage);

export default PostMessage;
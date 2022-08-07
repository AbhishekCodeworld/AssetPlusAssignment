var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
    {
        // @AssetPlus: Describe schema here

        title : {
            type:String,
            required: true
        },
        description : {
            type: String,
            required: true
        },

        poster: {
            type: String,
            requried:true
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Post", postSchema)
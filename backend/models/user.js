const mongoose = require ("mongoose");

const {ObjectId} = mongoose.Schema;

const userSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: [true, "first name is required"],
        trim: true,
        text:true,
    },
    last_name:{
        type: String,
        required: [true, "last name is required"],
        trim: true,
        text:true,
    },
    username:{
        type: String,
        required: [true, " username is required"],
        trim: true,
        text:true,
        unique: true
    },
    email:{
        type: String,
        required: [true, "email is required"],
        trim: true,
    },
    password:{
        type: String,
        required: [true, "password is required"],
    },
    picture:{
        type: String,
        default: "data:image/jpeg;base64,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"
    },
    cover:{
        type: String,
        
        trim: true,
    },
    gender:{
        type: String,
        required: [true, "gender is required"],
        trim: true,
    },
    bYear:{
        type: Number,
        required: true,
        trim: true,
    },
    bMonth:{
        type: Number,
        required: true,
        trim: true,
    },
    bDay:{
        type: Number,
        required: true,
        trim: true,
    },
    verified:{
        type: Boolean,
        default: false,
        trim: true,
    },
    friends: [{
        type: ObjectId,
        ref: "User",
    }],
    following: [{
        type: ObjectId,
        ref: "User",
    }],
    followers: [{
        type: ObjectId,
        ref: "User",
    }],
    requests: [{
        type: ObjectId,
        ref: "User",
    }],
    search: [
        {
            user: {
                type: ObjectId,
                ref: "User",
                required: true,
            },
            createdAt: {
                type: Date,
                required: true,
            },
        },
    ],
    details:{
        bio:{
            type: String,
        },
        otherName:{
            type: String,
        },
        job:{
            type: String,
        },
        workplace:{
            type: String,
        },
        highschool:{
            type: String,
        },
        college:{
            type: String,
        },
        currentCity:{
            type: String,
        },
        hometown:{
            type: String,
        },
        relationship:{
            type: String,
            enum: ["single", "In a Relationship", "Married", "Divorced"],
        },
        instagram:{
            type: String,
        }
    },
    savedPosts:[
        {
            post: {
                type:ObjectId,
                ref:"Post"
            },
            savedAt:{
                type: Date,
                // default: new Date(),
                required:true,
            },
        },
    ],
},
{
    timestamps: true,
});

module.exports=mongoose.model("User", userSchema);
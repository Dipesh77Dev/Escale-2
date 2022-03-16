module.exports =(mongoose) => {
    const User = mongoose.model(
        "user", mongoose.Schema({
            name: String,
            email: String,
            bio: String,
            // profilePic: Buffer
        },{
            timestamps:true
        })
    )
    return User
}
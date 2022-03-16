module.exports =(mongoose) => {
    const Business = mongoose.model(
        "business", mongoose.Schema({
            name: String,
            email: String,
            registrationNo: Number,
            // profilePic: Buffer
        })
    )
    return Business
}
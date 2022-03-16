module.exports =(mongoose) => {
    const Product = mongoose.model(
        "product", mongoose.Schema({
            name: String,
            mrp: Number,
            description: String
            // image: Buffer
        })
    )
    return Product
}
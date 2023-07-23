const {connect} = require("../database/connectdb");
const getProducts = async(req,res) => {
    try {
        const dataProducts = await connect();
        return res.status(200).json(dataProducts.products);
    } catch(error) {
        console.log(error);
    }

}

module.exports = getProducts;
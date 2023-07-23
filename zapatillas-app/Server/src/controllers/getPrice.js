const {connect} = require("../database/connectdb");

const getPrice = async(req,res) => {
    const { id, name_product } = req.params;

    console.log("id",id,"name", name_product);

    try {
        const data = await connect(id);
        const user = data.clients;
        const products = data.products;
        const { brands } = user[0];
        let price;

        const search = products.filter( product => (product?.id_marca?.toString() === brands[0]?.toString()) && (product?.nombre === decodeURIComponent(name_product) || product?.name === decodeURIComponent(name_product)) );

        if(search) {
            if(search[0]?.precioBase) price = search[0]?.precioBase;
            if(search[0]?.specialPrices) price = search[0]?.specialPrices;
        }
        console.log("precio",price);
        return res.status(200).json(price)
    } catch(error) {
        console.log(error);
    }

}

module.exports = getPrice;
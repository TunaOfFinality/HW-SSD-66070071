const db = require("../config/db")
const productController = {
    getAllProducts: (req, res) => {

    db.query('SELECT * FROM products WHERE is_deleted = 0', (err, results) => {

        if (err) return res.status(500).json({ error: err.message });

        res.json(results);

    });
        
    },

    getProductById:

    searchProducts:

    createProduct:

    updateProduct:

    softDeleteProduct:

    restoreProduct:

}
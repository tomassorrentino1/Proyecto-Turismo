let productController = {
    cart: function(req, res, next) {
        res.render('productCart');
      },
    
    detail: function(req, res, next) {
        res.render('productDetail');
      },

    edit: function(req, res, next) {
        res.render('productEdit');
      },
}

module.exports = productController;
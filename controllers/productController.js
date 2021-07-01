let productController = {
    cart: function(req, res, next) {
        res.render('productCart');
      },
    
    detail: function(req, res, next) {
        res.render('productDetail');
      }

}

module.exports = productController;
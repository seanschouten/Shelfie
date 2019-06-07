module.exports = {
create: (req, res, next) => {
    const db = req.app.get('db')
    const { productName, price, imageUrl } = req.body;
    db.createProduct([ productName, price, imageUrl])
    .then( () => res.send(inventory))
    .cath(err => {res.status(500).send({errorMessage:'Not Working'});
    console.log(err)
});
},

read: (req, res, next) => {

},

update: (req, res, next) => {

},

delete: (req, res, next) =>{

}
}
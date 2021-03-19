module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db')
    const {name, description, price, image_url} = req.body;
    
    db.create_product([name, description, price, image_url])
    .then(dbres => {
      res.status(200).send(dbres)
    })
    .catch(err => console.log(err))
  },


  getAll: (req, res, next) => {
    const db = req.app.get('db')

    db.read_products()
      .then(dbres => {
        res.status(200).send(dbres)
      })
      .catch(err => console.log(err))
  },


  getOne: (req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.params;

    db.read_product(id)
      .then(dbres => {
        res.status(200).send(dbres)
      })
      .catch(err => console.log(err))
  },


  update: (req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.params;
    const {description} = req.body

    db.update_product(id, description)
      .then(dbres => {
        res.status(200).send(dbres)
      })
      .catch(err => console.log(err))
  },


  delete: (req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.params;

    db.delete_product(id)
      .then(dbres => {
        res.status(200).send(dbres)
      })
      .catch(err => console.log(err))
  }
}
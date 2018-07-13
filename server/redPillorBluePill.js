module.exports = {

    postNewListing: ( req, res ) => {
        const dbInstance = req.app.set('db');
        const {name, address, city, state, zipcode } = req.body;
  
        dbInstance.newListing([name, address, city, state, zipcode])
        .then( payload => {
          res.status(200).json(payload);})
        
           },

  getAllListing: ( req, res ) => {
    const dbInstance = req.app.set('db');
        
      dbInstance.fetchAll()
        .then( response => res.status(200).json( response ) )
        .catch( err => {
           res.status(500).send(err);
              console.log(err)
            } );
          },

}
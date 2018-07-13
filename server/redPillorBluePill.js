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


          handleDelete: ( req, res, next ) => {
            const dbInstance = req.app.get('db');
            const { id } = req.params;
        
            dbInstance.deleteListing( [id] )
              .then( response  => {
                res.sendStatus(200).json(response )} )
              .catch( err => {
                res.status(500).send({err: "Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err)
              } );
          },

}
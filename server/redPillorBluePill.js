module.exports = {

  postNewListing: ( req, res ) => {
        const dbInstance = req.app.set('db');
        const {name, address, city, state, zipcode, image_url, mortgage, rent } = req.body;
  
        dbInstance.newListing([name, address, city, state, zipcode, image_url, mortgage, rent])
        .then( payload => {
          res.status(200).json(payload)});
        
           },

  getAllListing: ( req, res ) => {
    const dbInstance = req.app.set('db');
        
      dbInstance.fetchAll()
        .then( payload2 => res.status(200).json( payload2 ) )
        .catch( err => {
           res.status(500).send(err);
              console.log(err)
            });
          },


handleDelete: ( req, res, next ) => {
  const dbInstance = req.app.get('db');
  const { id } = req.params;
        
    dbInstance.deleteListing( [id] )
      .then( payload3  => {
        res.sendStatus(200).json(payload3 )} )
          .catch( err => {
            res.status(500).send(err);
            console.log(err)
          });
          },

}
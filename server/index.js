require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const cors=require('cors');

const enterTheMatrix = require('./redPillorBluePill');

app.use(bodyParser.json());
app.use(cors());

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
} ).catch(err => console.log(err));

//app.use( express.static( `${__dirname}/build` ) );

app.post( '/api/addListing', enterTheMatrix.postNewListing );
app.get( '/api/fetchListings', enterTheMatrix.getAllListing );
// app.put( '/api/updateListing/:id', enterTheMatrix.updateListing );
app.delete( '/api/deleteListing/:id',enterTheMatrix.handleDelete );

const port = 4000
app.listen( port, () => { console.log(`Coming to you live from port ${port} , the hottest port in town!`);});
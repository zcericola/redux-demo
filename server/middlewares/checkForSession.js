const users = require("../models/users");

module.exports = function( req, res, next ) {
    const { session } = req;
  
    if ( !session.user ) {
      session.user = { id: 3, username: 'Marlon Brando', password: 'fadfdafkl' };
    } 
    
    next();
  };
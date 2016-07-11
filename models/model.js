
//==========================================================================
//model.js is the 'passing through' of the search parameters into the queries.....if that makes sense.
//Don't think I will use model.js!!!!!!!!
//So confusing and not neccessary.
var orm = require('../config/orm.js');

var searchFramework =  orm.selectFramework('profiles', 'framework', res.body.something);

module.exports = model.js;
var typeModel	= require('../models/typeModel');

module.exports.all = function(req,res){
	 typeModel.find( function(err, type) {
	 	var result = { success: 'N',section: [], criteria: [], message: 'No Data present' }
	    if (err) throw err;
	    
	    //Username is not present
	    if (!type) {
	    	res.json(result);
	    } 

	    else {
	    	console.log(JSON.stringify(type));
	    	//console.log(type.section.length)
	    	result.success  = 'Y';
	    	result.message  = 'Data is available.';
	    	result.section  = type[0].section;
	    	result.criteria = type[0].criteria;
	    	res.json(result);
	    }
	  });
	
}

module.exports.saveType = function(req,res){
	 var typ = new typeModel(req.body)
	 typ.save( function(err, result) {

	    if(err){
			//console.log(err);
			res.json({ success: 'N', message: 'Types are not inserted.' });
		}else{
		   	//console.log(result)
		    res.json({success: 'Y', message: 'Types are inserted successfully.' });
		}
	  });
	
}

var incidentModel	= require('../models/incidentModel');

module.exports.save = function(req,res){
	 var incident = new incidentModel(req.body)
	 incident.save( function(err, result) {

	    if(err){
			//console.log(err);
			res.json({ success: 'N', message: "Incident can't be saved" });
		}else{
		   	//console.log(result)
		    res.json({success: 'Y', message: 'Incident saved successfully.' });
		}
	  });
	
}

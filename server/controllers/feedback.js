var feedbackModel	= require('../models/feedbackModel');

module.exports.save = function(req,res){
	 var feedback = new feedbackModel(req.body)
	 feedback.save( function(err, result) {

	    if(err){
			//console.log(err);
			res.json({ success: 'N', message: "Feedback is not saved" });
		}else{
		   	//console.log(result)
		    res.json({success: 'Y', message: 'Feedback saved successfully.' });
		}
	  });
	
}

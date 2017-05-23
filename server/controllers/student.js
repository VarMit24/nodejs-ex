var studentModel	= require('../models/studentModel');

module.exports.students = function(req,res){
	 studentModel.find({section:req.body.section}, function(err, student) {
	    if (err) throw err;
	    
	    //Username is not present
	    if (!student) {
	    	res.json({ success: 'N', message: 'This section is empty!!' });
	    } 

	    else {
	    	console.log(JSON.stringify(student));
	    	var studs = [];
	    	for (var i = student.length - 1; i >= 0; i--) {
	    		studs.push("{ name:"+student[i].name+", gva_id:"+student[i]._id+"}")
	    	}
	    	res.json({ success: 'Y',students: studs, message: 'Students are present' });
	    }
	  });
	
}

module.exports.saveStudent = function(req,res){
	 var stud = new studentModel(req.body)
	 stud.save( function(err, result) {

	    if(err){
			//console.log(err);
			res.json({ success: 'N', message: 'Student is not able to enter into the section.' });
		}else{
		   	//console.log(result)
		    res.json({success: 'Y', message: 'Student entered successfully in the section.' });
		}
	  });
	
}

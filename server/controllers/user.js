var userSchema	= require('../models/userModel'),
	mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt');

var SALT_WORK_FACTOR = 10;
userSchema.pre("save", function(next){
	    		var user = this;
	    		//console.log(JSON.stringify(user))
	    		if(!user.isModified('password')) return next();

	    		bcrypt.genSalt(SALT_WORK_FACTOR, function(err,salt){
	    			if(err) return next(err);

	    			bcrypt.hash(user.password, salt, function(err,hash){
	    				if(err) return next(err);

	    				user.password = hash;
	    				next();
	    			});
	    		});
	    	});

var userModel   = mongoose.model('User' , userSchema);



module.exports.signin = function(req,res){
	 userModel.findOne({
	    userName: req.body.userName
	  }, function(err, user) {

	    if (err) throw err;
	    
	    //Username is not present
	    if (!user) {
	    	res.json({ success: 'N', message: 'User is not registered.' });
	    } 

	    else {
	    	//console.log(JSON.stringify(user));
	    	bcrypt.compare(req.body.password, user.password, function(err,result){
	    		if(result)
	    			res.json({ success: 'Y', userId: user._id, message: 'User is logged In!' });
	    		else
	    			res.json({ success: 'N', userId: null, message: 'Password is incorrect!' });
	    	});
	    }

	  });
	
}

module.exports.signup = function(req,res){
	 userModel.findOne({
	    userName: req.body.userName
	  }, function(err, user) {

	    if (err) throw err;

	    if (!user) {
	    	var newUser = new userModel(req.body);
	    	
	    	//console.log(JSON.stringify(req.body)+" ------ "+ JSON.stringify(newUser))
	    	newUser.save(function(err,result){
			     if(err){
			        //console.log(err);
			        res.json({ success: 'N', message: 'User registration failed.' });
			     }else{
			     	//console.log(result)
			        res.json({success: 'Y', message: 'User is registered successfully.' });
			     }
			});	
	    } 

	    //Username is present
	    else {
	    	res.json({ success: 'N', message: 'User name is already present.' });
	    }

	  });
	
}
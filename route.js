var
	express 	= require('express'),
  user      = require('./server/controllers/user'),
  student   = require('./server/controllers/student'),
  incident  = require('./server/controllers/incident'),
  feedback  = require('./server/controllers/feedback'),
  type      = require('./server/controllers/type');	
// API ROUTES -------------------

// get an instance of the router for api routes
var apiRoutes = express.Router(); 

// route to sign up a user (POST http://localhost:3000/api/signup)
apiRoutes.post('/signup', user.signup)

// route to signin a user (POST http://localhost:3000/api/signin)
apiRoutes.post('/signin', user.signin)

// route to save the list of Incidents Sections and Criteria
apiRoutes.post('/saveIncidentSecNTyp',type.saveType)

// route to get the list of Incidents Sections and Criteria
apiRoutes.get('/incidentSecNTyp',type.all)

// route to get the list of students 
apiRoutes.post('/students',student.students)

// route to get the detail of a student 
apiRoutes.post('/saveStudent',student.saveStudent)

// route to save the incident 
apiRoutes.post('/saveIncident',incident.save)

// route to save the feedback 
apiRoutes.post('/feedback',feedback.save)

module.exports = apiRoutes;
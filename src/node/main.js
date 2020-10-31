var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
var multer = require('multer');
const DIR = '../assets/adminnotice';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;  //.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
})


var upload = multer({
  storage: storage,
})



var mongoose = require("mongoose");
const { execFile } = require("child_process");
const { strict } = require("assert");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/admin", { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
var Schema = mongoose.Schema;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);

function mongoConnected() {
    console.log("Connection done!");
    var Item = new mongoose.Schema({
    fac_name: String,
    fac_pswd: String,
    fac_branch: String,
    fac_sem: Number,
    fac_sub:String,
    }, { collection: 'faculty' });

    var stu = new mongoose.Schema({
        stu_name: String,
        stu_pswd: String,
        stu_branch: String,
        stu_sem: Number,
		}, { collection: 'student' });
	
		var ad = new mongoose.Schema({
			admin_name: String,
			admin_pswd: String,
			admin_branch: String,
			path:String,
			
			}, { collection: 'admin' });

			var not = new mongoose.Schema({
				fpath: String,
				branch:String,
				who:Number,
				}, { collection: 'admin_notice' });

			var bl = new mongoose.Schema({
			branch: String,
			sem: Number,
			sub: String,
			path:String,
			
			}, { collection: 'book_lec' });
		var assi = new mongoose.Schema({
				branch: String,
				sem: Number,
				subject: String,
				path:String,
				}, { collection: 'assi' });
		var submit = new mongoose.Schema({
					name:String,
					branch: String,
					sem: Number,
					sub: String,
					fpath:String,
					path:String,
					}, { collection: 'stusubmit' });
		
    var Item = mongoose.model('faculty', Item);
    var ostu= mongoose.model('student', stu);
	var admi= mongoose.model('admin', ad);
	var not= mongoose.model('admin_notice', not);
	var bl= mongoose.model('book_lec', bl);
	var assi= mongoose.model('assi', assi);
	var submit= mongoose.model('stusubmit', submit);
   
	app.get("/getfac/:branch/:sem", (req, res) => {
        console.log("Request come!");
        console.log(req.params.sem);
        console.log(req.params.branch);
        
        Item.find( { 'fac_branch':req.params.branch,'fac_sem':req.params.sem } , function(err,al ) {
            if (err) {
                res.status(400);
                res.send("Unable to find admin");
			}
			else if(al==null){
				res.send({ "message": "Employee record saved successfully"});
			}
            
             else  {
                console.log("All done");
                console.log("dona");
                console.log(al.fac_name);
                res.json(al);
            }
		});
    });

    app.post("/addfac", (req, res) => {
		var myData = new Item(req.body);
		console.log(myData);
	//	Users.findOne({'email_id':myData.email_id},function(err,result){
			
				myData.save( function(err) {
					if (err) {
						res.status(400);
						res.send("Unable to add names");
					}
					else {	
						res.status(200);
						console.log("Employee added!");
						console.log(myData);
						res.json({ "message": "Employee record saved successfully"});
					}
				});
			
	//	});
		
    });
    
    app.delete("/delfac/:name/:pswd", (req, res) => {
		console.log(req.params.name+req.params.pswd);
		Item.findOne( {fac_name : req.params.name,fac_pswd:req.params.pswd}, function(err, itm) {
		  if (err) {
			res.status(400);
			res.send("Unable to find the faculty");
          }
          else if(itm==null){
            res.send({"message" : "record not found!"});
          }
		  else {
			itm.deleteOne( function(err,itm) {
			  if (err) {
				console.log("Unable to remove ");
				res.status(400);
				res.send("Unable to remove ");
			  }
			  console.log("faculty removed!");
			  res.send({"message" : "faculty removed!"});
			});
		  }
		});
	  });
    
      app.post("/addstu", (req, res) => {
		var myData = new ostu(req.body);
		console.log(myData);
	//	Users.findOne({'email_id':myData.email_id},function(err,result){
			
				myData.save( function(err) {
					if (err) {
					//	res.status(400);
						res.send("Unable to add names");
					}
					else {	
					//	res.status(200);
						console.log("Employee added!");
						console.log(myData);
						res.json({ "message": "Employee record saved successfully"});
					}
				});
			
	//	});
		
    });

    app.delete("/delstu/:name/:pswd", (req, res) => {
		console.log(req.params.name+req.params.pswd);
		ostu.findOne( {stu_name : req.params.name,stu_pswd:req.params.pswd}, function(err, itm) {
		  if (err) {
              console.log("not found!!");
			res.status(400);
			res.send("Unable to find the student");
		  }else if(itm==null){
              console.log("not found");
              res.send({"message" : "record not found!"});
          }
		  else {
			itm.deleteOne( function(err,itm) {
			  if (err) {
                console.log("Unable to remove ");
				res.status(400);
				res.send("Unable to remove ");
			  }
              console.log("student removed!");
			  res.send({"message" : "student removed!"});
			});
		  }
		});
	  });
	  //adminlogin
	  app.get("/login/:name/:pswd/:branch",(req, res) => {
		console.log("namei",req.params.name);
		console.log("pswdi",req.params.pswd);
		console.log("barnchi",req.params.branch);
		
		admi.findOne( {'admin_name':req.params.name,'admin_pswd':req.params.pswd,'admin_branch':req.params.branch}, function(err, usr) {
			if (err) {
				console.log("Unable to find");
				res.status(400);
				res.send("Unable to find");
			}
			else if(usr==null){
				console.log(" null fail");
				res.send({ "message": "failed"});
			}
			else{
				console.log("login done");
				res.json({ "message": "login successfull"});
			}
		});
	});
	//studentlogin
	app.get("/slogin/:name/:pswd/:branch/:sem",(req, res) => {
		console.log(req.params.name);
		console.log(req.params.pswd);
		ostu.findOne( {'stu_name':req.params.name,'stu_pswd':req.params.pswd,'stu_branch':req.params.branch,'stu_sem':req.params.sem}, function(err, usr) {
			if (err) {
				console.log("Unable to find");
				res.status(400);
				res.send("Unable to find");
			}
			else if(usr==null){
				console.log(" null stu fail");
				res.send({ "message": "failed"});
			}
			else{
				console.log("login done");
				res.json({ "message": "login successfull"});
			}
		});
	});
	//facultylogin
	app.get("/flogin/:name/:pswd/:branch/:sem",(req, res) => {
		console.log(req.params.name);
		console.log(req.params.pswd);
		Item.findOne( {'fac_name':req.params.name,'fac_pswd':req.params.pswd,'fac_branch':req.params.branch,'fac_sem':req.params.sem}, function(err, usr) {
			if (err) {
				console.log("Unable to find");
				res.status(400);
				res.send("Unable to find");
			}
			else if(usr==null){
				console.log(" null fac fail");
				res.send({ "message": "failed"});
			}
			else{
				console.log("login done");
				res.json({ "message": "login successfull"});
			}
		});
	});
	//adminaboutme
	app.get("/afind/:name", (req, res) => {
		admi.findOne( {'admin_name':req.params.name}, function(err, usr) {
			if (err) {
				console.log("Unable to find ");
				res.status(400);
				res.send("Unable to find");
			}
			else if(usr == null){
				console.log("admin is null");
				res.status(400);
				res.send(usr);
			}
			else {
				console.log(usr);
				console.log("admin record returned");
				res.send(usr);
			}
		});
	});
	//facaboutme
	app.get("/ffind/:name", (req, res) => {
		Item.findOne( {'fac_name':req.params.name}, function(err, usr) {
			if (err) {
				console.log("Unable to find ");
				res.status(400);
				res.send("Unable to find");
			}
			else if(usr == null){
				console.log("faculty is null");
				res.status(400);
				res.send(usr);
			}
			else {
				console.log(usr);
				console.log("faculty record returned");
				res.send(usr);
			}
		});
	});
	//studentaboutme
	app.get("/sfind/:name", (req, res) => {
		ostu.findOne( {'stu_name':req.params.name}, function(err, usr) {
			if (err) {
				console.log("Unable to find ");
				res.status(400);
				res.send("Unable to find");
			}
			else if(usr == null){
				console.log("student is null");
				res.status(400);
				res.send(usr);
			}
			else {
				console.log(usr);
				console.log("student record returned");
				res.send(usr);
			}
		});
	});
	//forsindingsubject
	app.get("/fafind/:branch/:sem", (req, res) => {
		Item.find( {'fac_branch':req.params.branch,'fac_sem':req.params.sem}, function(err, usr) {
			if (err) {
				console.log("Unable to find ");
				res.status(400);
				res.send("Unable to find");
			}
			else if(usr == null){
				console.log("fac is null");
				res.status(400);
				res.send(usr);
			}
			else {
				console.log(usr);
				console.log("fac record returned");
				res.send(usr);
			}
		});
	});
	//fifind
	app.get("/fifind/:name", (req, res) => {
		Item.find( {'fac_name':req.params.name}, function(err, usr) {
			if (err) {
				console.log("Unable to find ");
				res.status(400);
				res.send("Unable to find");
			}
			else if(usr == null){
				console.log("faculty is null");
				res.status(400);
				res.send(usr);
			}
			else {
				console.log(usr);
				console.log("faculty record returned");
				res.send(usr);
			}
		});
	});

	app.get("/submitfind/:branch/:sem/:sub", (req, res) => {
		console.log(req.params.sem);
		submit.find( {'branch':req.params.branch,'sem':req.params.sem,'sub':req.params.sub}, function(err, usr) {
			if (err) {
				console.log("Unable to find ");
			//	res.status(400);
				res.send("Unable to find");
			}
			else if(usr == null){
				console.log("faculty is null");
				res.status(400);
				res.send(usr);
			}
			else {
				console.log(usr);
				console.log("faculty record returned");
				res.send(usr);
			}
		});
	});

	//uploadnotice
	 app.post("/uploadoc/:sv/:branch",upload.single('udoc'), (req, res) => {

			if(!req.file){
				console.log("no file");
				alert('please select file');
				return res.send({'message':"err"});

			}
			else{
				console.log("file received");
			//	return res.send({'message':"done"});
				var my = new not();
				my.fpath=req.file.filename;
				my.branch=req.params.branch;
				my.who=req.params.sv;
						console.log(my);
			
				my.save( function(err) {
					if (err) {
					//	res.status(400);
						res.send("Unable to add ");
					}
					else {	
					//	res.status(200);
						console.log("notice added!");
						console.log(my);
						res.json({ "message": "notice record saved successfully"});
					}
				});
			}

		
	})
	//upload book
	app.post("/uploadbook/:branch/:sem/:sub",upload.single('updoc'), (req, res) => {

		if(!req.file){
			console.log("no file");
			return res.send({'message':"err"});

		}
		else{
			console.log("file received");
			//return res.send({'message':"done"});
			var m = new bl();
			m.branch=req.params.branch;
			m.sem=req.params.sem;
			m.sub=req.params.sub;
			m.path=req.file.filename;
			console.log(m.path);
			m.save( function(err) {
				if (err) {
					res.status(400);
					res.send("Unable to add ");
				}
				else {	
					res.status(200);
					console.log("book added!");
					console.log(m);
					res.json({ "message": "book record saved successfully"});
				}
			});
		
			
		}

	
})
//upload students assignment to db
app.post("/usubassi/:name/:branch/:sem/:sub/:path",upload.single('updoc'), (req, res) => {

	if(!req.file){
		console.log("no file");
		return res.send({'message':"err"});

	}
	else{
		console.log("file received");
		//return res.send({'message':"done"});
		var m = new submit();
		m.name=req.params.name;
		m.branch=req.params.branch;
		m.sem=req.params.sem;
		m.sub=req.params.sub;
		m.fpath=req.params.path;
		m.path=req.file.filename;
		console.log(m.path);
		m.save( function(err) {
			if (err) {
				res.status(400);
				res.send("Unable to add ");
			}
			else {	
				res.status(200);
				console.log("book added!");
				console.log(m);
				res.json({ "message": "book record saved successfully"});
			}
		});
	
		
	}


})
//uploadassignment by faculty
app.post("/uploadassi/:branch/:sem/:sub",upload.single('updoc'), (req, res) => {

	if(!req.file){
		console.log("no sub file");
		return res.send({'message':"err"});

	}
	else{
		console.log("file submit stu received");
		//return res.send({'message':"done"});
		var m = new assi();
		//m.name=req.params.name;
		m.branch=req.params.branch;
		m.sem=req.params.sem;
		m.subject=req.params.sub;
		m.path=req.file.filename;
		console.log(m.path);
		m.save( function(err) {
			if (err) {
				res.status(400);
				res.send("Unable to add stu assi");
			}
			else {	
				res.status(200);
				console.log("stu assi added!");
				console.log(m);
				res.json({ "message": "book record saved successfully"});
			}
		});
	
		
	}


})
//noticefinf
app.get("/nfind/:branch", (req, res) => {
	console.log(req.params.branch);
	//not.find({$and:[{ $or: [ {'who':1} , {'who':3} ] },{'branch':req.params.branch }]}, )$or: [ {'who':1} , {'who':3} ] 
	not.find({$and:[{ $or: [ {'who':1} , {'who':3} ] },{'branch':req.params.branch }] }, function(err, n) {
		if (err) {
			console.log("Unable to find ");
		//	res.status(400);
			res.send("Unable to find");
		}
		else if(n == null){
			console.log("not is null");
			//res.status(400);
			res.send(n);
		}
		else {
			console.log(n);
			console.log("not record returned");
			res.send(n);
		}
	});
	
});
app.get("/nofind/:branch", (req, res) => {
	
	not.find({ $and:[{ $or: [ {'who':2} , {'who':3} ] },{'branch':req.params.branch }]  }, function(err, n) {
		if (err) {
			console.log("Unable to find ");
			res.status(400);
			res.send("Unable to find");
		}
		else if(n == null){
			console.log("not is null");
			res.status(400);
			res.send(n);
		}
		else {
			console.log(n);
			console.log("not record returned");
			res.send(n);
		}
	});
	
});

app.get("/vfind/:branch", (req, res) => {
	
	not.find({'branch':req.params.branch }, function(err, n) {
		if (err) {
			console.log("Unable to find ");
			res.status(400);
			res.send("Unable to find");
		}
		else if(n == null){
			console.log("not is null");
			res.status(400);
			res.send(n);
		}
		else {
			console.log(n);
			console.log("not record returned");
			res.send(n);
		}
	});
	
});
//booklecfinfforstudent
app.get("/blfind/:sub", (req, res) => {
	bl.find( {'sub':req.params.sub},function(err, n) {
		if (err) {
			console.log("Unable to find ");
			res.status(400);
			res.send("Unable to find");
		}
		else if(n == null){
			console.log("not is null");
			res.status(400);
			res.send(n);
		}
		else {
			console.log(n);
			console.log("booklec record returned");
			res.send(n);
		}
	});
});
app.get("/assifind/:sub", (req, res) => {
	assi.find( {'subject':req.params.sub},function(err, n) {
		if (err) {
			console.log("Unable to find ");
			res.status(400);
			res.send("Unable to find");
		}
		else if(n == null){
			console.log("not is null");
			res.status(400);
			res.send(n);
		}
		else {
			console.log(n);
			console.log("assignment record returned");
			res.send(n);
		}
	});
});
//findstatusofstudent
app.get("/findstatus/:name/:path", (req, res) => {
	console.log(req.params.path,req.params.name);
	submit.findOne( {'name':req.params.name,'fpath':req.params.path}, function(err, usr) {
		if (err) {
			console.log("Unable ");
			//res.status(400);
			res.send("Unable to find");
		}
		else if(usr == null){
			console.log("null null null");
			console.log(usr);
			//res.status(400);
			res.json({ "message": "such student not found"});	}
		else {
			console.log(usr);
			console.log(usr);
			res.json({ "message": "such student found"});	}
		
	});
});

}
app.listen(8000, () => console.log("Server running on port 8000"));
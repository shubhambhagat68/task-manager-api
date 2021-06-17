
const mongoose =require('mongoose')



mongoose.connect(process.env.MONGODB_URL,{
	useNewUrlParser:true,
	useCreateIndex:true,
	useFindAndModify:false,
	useUnifiedTopology:true
})





























//Obejct making for USER


// const me=new User({
// 	name:'  shubam   ',
// 	email:'MYMAIL@MAIL.IO       ',
// 	password:' phone98!'
// })

// me.save().then(()=>{
// 	console.log(me)
// }).catch((error)=>{
// 	console.log("Error!",error)
// })



//Object Making for Task

// const task=new Task({
// 	description:'  Eat lunch'
// })

// task.save().then(()=>{
// 	console.log(task)
// }).catch((error)=>{
// 	console.log("Error!",error)
// })

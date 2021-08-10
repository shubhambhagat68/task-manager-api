const cluster = require('cluster')


if(cluster.isMaster){
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
}
else{
	const express = require('express')
	const userRouter=require('./routers/user.js')
	const taskRouter=require('./routers/task.js')
	require('./db/mongoose.js')


	const app = express()
	const port=process.env.PORT


	app.use(express.json())
	app.use(userRouter)
	app.use(taskRouter)


	app.listen(port,()=>{
		console.log("Server Running on port "+port)
	})
}


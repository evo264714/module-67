/*
* ---------------------------------------
* Mongodb Connection
* ---------------------------------------
* 1. Create an account
* 2. Create an user with password
* 3. Whitelist IP address
* 4. database > connect > driver > Node > View full code
* 5. Change the <password> in the uri
* ---------------------------------------
* 1. Create --- POST
* 2. app.post('/users'/ async(req, res) =>{})
* 3. Make the function async to use await inside of it
* 4. Make sure you use the express.json() middleware
* 5. Access data from the body: const user = req.body
* 6. const result = await userCollection.insertOne(user)
* res.send(result)
* 
* 
* ---------------
* Client side
* ---------------
* 1. Create fetch
* 2. add a second parameter as an object
* 3. Provide method: 'POST'
* 4. add headers: {'content-type': 'application/json'}
* 5. add body: JSON.stringify(user)
* 
* 
* 
* 
* 
* 
* 
* 
* -------------------
* READ MANY
* -------------------
* 1. Create a cursor = userCollection.find()
* 2. const result = await cursor.toArray()
* 
* 
* ---------------------
* DELETE
* ---------------------
* 1. create app.delete('/users/:id', async(req, res))
* 2. Specify unique ObjectId to delete the right user
* 3. const query = { _id: new ObjectId(id)}
* const result = await userCollection.deleteOne(query);
* 
* 
* -----------
* CLIENT
* -----------
* 1. Create dynamic url with id
* 2. Mention the DELETE method
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 


*/
# Learn Albanian App BACK-END

### Link to Website 
https://learnalb-backend.herokuapp.com/alb


### Link to FRONT-END git repo
https://learnalb-frontend.herokuapp.com/?albWord=Si+je%3F%3F

### Link to FRONT-END website
https://github.com/mcari1311/alb_frontend/blob/main/learn-alb/README.md

### Description

Being from a very small, often unknown country has meant that growing up very few people I knew spoke it. For my project I wanted to create an effective app that helped people learn Albanian. My inspiration was quizlet/duolingo outline. 

### Example

This is an example code snippet from the server.js file. It's the seed route I used to populate my data base.

```
app.get('/seed', async(req, res) => {
    await Alb.deleteMany({})
    await Alb.create(albData)
    res.send('done !') //testing
})


```

### List of Features 

* CRUD  
* Connects with front end for data purposes
* Displays each word's id, Albanian word, English word, understood, etc.


### Routes
 
Since React handled the Create and Edit routes, the rest are handled here! 

### List of Technologies Used
* Javascript
* CSS


### Future Plans 

Due to time constraints I wasn't able fufill the complete vision I had for this project. There are many features I'd like to add. An example is a seperate section that pushes the words that you are having difficulty with into another array so you can restudy them. Another feature I'll work on is adding audio!


import exppress from "express"
const app=exppress()

app.listen(7000,()=>{
    console.log("Server is running at port number 7000.")
})

git add .
git commit -m "backend"
git branch -M master
git remote add origin https://github.com/Sheikh-369/user-Model-Backend-with-Node-.git
git push -u origin master
import app from './app'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(()=>{
    console.log('Database connected')
    const PORT: number = 3000
    const runningMsg: string = `Server is running on port ${PORT}`
    app.listen(3000, ()=>{
        console.log(runningMsg)
    })
}).catch(err =>{
    console.log(err)
})


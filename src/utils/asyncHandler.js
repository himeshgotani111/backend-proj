import { Promise } from "mongoose"

const asynchandler=(requestHandler)=>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(res,res,next))
        .catch((err)=> next(err))
    }
}


export {asynchandler}

// const asynchandler = () => {}
// const asynchandler = (func) => () => {}
// const asynchandler = (func ) => async () => {}

//2nd method
// const asynchandler = (fn) => async(res,res,next) => {
//     try {
//         await fn(res,res,next)
//     } catch (error) {
//         res.satus(error.code || 500).json({
//             success : false,
//             message : err.message
//         })
//     }
// }
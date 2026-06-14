// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next))
//             .catch((err) => next(err));
//     };
// };

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export default asyncHandler;


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
const render = (req, res, next) => (
  res.render('index',{
    title: 'Hello World',
    message: 'this is jade template'
  })
)

const api = (req,res,next) => (
  res.status(200).json({
    message: 'hello world'
  })
)

export {
  render,
  api
}

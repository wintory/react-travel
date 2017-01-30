const data ={
  provice: ["bkk", "cm" , "kk"],
  detail: {
      bkk: ["a","b","c"],
      cm: ["a1","b1","c1"],
      kk: ["a2","b2","d2"]
  }
}

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

const getButton = (req,res,next) => {
  return res.json(data.provice)
}

const getDetail = (req,res,next) => {
  // console.log(data.detail[req.params.province])
  return res.json(data.detail[req.params.province])
}

export {
  render,
  api,
  getButton,
  getDetail
}

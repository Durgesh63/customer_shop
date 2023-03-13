const Error404 = (req,res) => {
  res.status(404).send({error: '404 Not Found'});
}

export default Error404

const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  // маршрут 
  fastify.get('/:firstNumber/:secondNumber', function (request, reply) {
    console.log(request);
    reply.send({ 
      hello: 'Привет',
      privet: Number(request.params.firstNumber) + Number(request.params.secondNumber), 
    })
  })
  fastify.get('/hello', function (request, reply) {
    console.log(request);
    sum = 1 + 1
    reply.send({ 
      hello1: 'Привет1',
      sum, 
    })
  })
  
  // Run the server!
  fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })
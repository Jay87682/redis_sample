const redis = require('redis');
const client = redis.createClient(); // this creates a new client
client.on('connect', () => {
  console.log('Redis client connected');
});
let x = 1, y = 2;

client.set('foo', x+','+y, 'EX', 30 ,redis.print);
//client.set('foo', 'bar');
client.get('foo', (error, result) => {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log('GET result ->' + result);
	console.log(result.split(','))
});

console.log('end')

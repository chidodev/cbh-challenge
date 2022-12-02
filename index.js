const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey({
    partitionKey: 'aa'
}));

console.log(deterministicPartitionKey({
    partitionKey: ['asd', 1]
}))
console.log(deterministicPartitionKey('a'))
console.log(deterministicPartitionKey(0.1))
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns defined partition key when given input partitionKey value of string", () => {
    const event = {
      partitionKey: "1"
    }
    const definedKey = deterministicPartitionKey(event);
    expect(definedKey).toBe(event.partitionKey);
  });

  it("Returns stringified of defined partition key when given input partitionKey value of non-string", () => {
    const event = {
      partitionKey: 1
    }
    const definedKey = deterministicPartitionKey(event);
    expect(definedKey).toBe(JSON.stringify(event.partitionKey));
  });


  it("Returns hash value when given normal input value", () => {
    const event = 'value'
    const definedKey = deterministicPartitionKey(event);
    expect(definedKey).toHaveLength(128);
  });

});

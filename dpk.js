const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const HASH_ALGOTRITH = "sha3-512";

  let candidate;

  if (!event) return TRIVIAL_PARTITION_KEY;

  if (event.partitionKey) {
    candidate = typeof event.partitionKey == "string" ? event.partitionKey : JSON.stringify(event.partitionKey);
    return candidate
  }

  const data = JSON.stringify(event);
  candidate = crypto.createHash(HASH_ALGOTRITH).update(data).digest("hex");

  return candidate;
};
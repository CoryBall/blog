import { Service } from 'typedi';

@Service()
class StorageConfig {
  key: string;
  secret: string;
  bucket: string;
  host: string;

  constructor() {
    const nullableKey = process.env.AWS_ACCESS_KEY_ID;
    const nullableSecret = process.env.AWS_SECRET_ACCESS_KEY;
    const nullableBucket = process.env.AWS_BUCKET;
    const nullableHost = process.env.AWS_HOSTNAME;
    if (!nullableKey) {
      throw new Error('AWS_ACCESS_KEY_ID not set');
      process.exit(1);
    }
    if (!nullableSecret) {
      throw new Error('AWS_SECRET_ACCESS_KEY not set');
      process.exit(1);
    }
    if (!nullableBucket) {
      throw new Error('AWS_BUCKET not set');
      process.exit(1);
    }
    if (!nullableHost) {
      throw new Error('AWS_HOSTNAME not set');
      process.exit(1);
    }
    this.key = nullableKey;
    this.secret = nullableSecret;
    this.bucket = nullableBucket;
    this.host = nullableHost;
  }
}

export default StorageConfig;

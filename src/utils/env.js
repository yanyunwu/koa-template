import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV;
dotenv.config();
dotenv.config({ path: `.${NODE_ENV}.env` });
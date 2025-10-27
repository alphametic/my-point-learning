import { TypeOrmModuleOptions } from "@nestjs/typeorm"; 
import { time } from "console";
import { connect } from "http2";

export const typeOrmConfig: TypeOrmModuleOptions = {
    
  type: 'mysql' as const,

  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'rootpass123',
  database: process.env.DB_NAME || 'my_point_learning',

  charset: 'utf8mb4_general_ci',
  timezone: '+09:00',

  synchronize: true,
  logging: ['error','query'],
  
  maxQueryExecutionTime: 1000,

  extra:{
    connectionLimit: 5,
    acquireTimeout: 30000,
    timeout: 30000,
    multipleStatements: false,
  },
};
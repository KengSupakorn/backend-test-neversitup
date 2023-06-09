import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
 
export const devConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '045615804',
  database: 'BACKENDTEST',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
  logging: true
}
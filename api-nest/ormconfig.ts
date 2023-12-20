import { DataSource } from 'typeorm'

const source = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'pass',
  database: 'clocking',
  // entities: ['./src/**/*.entity.ts'],
  entities: [__dirname + '/**/*.entity.ts'],  // ロードするエンティティ
  // entities: ['./src/**/*.entity.ts'],
  migrations: ['migrations/**/*.ts'],
  synchronize: true, // TODO: 本番環境では推奨されていないため、環境によって分ける
  logging: true,
})

export default source
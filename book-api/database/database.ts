import Application from '@ioc:Adonis/Core/Application'
import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  // Default connection
  connection: Env.get('DB_CONNECTION'),

  // List of available connections
  connections: {
      
    sqlite: {
        client: 'sqlite',
        connection: {
          filename: Application.tmpPath('db.sqlite3'),
        },
        migrations: {
          naturalSort: true,
        },
        useNullAsDefault: true,
        healthCheck: false,
        debug: false,
      }
  }
}

export default databaseConfig
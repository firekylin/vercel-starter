const {
  FK_DB_MODE,
  FK_DB_HOST,
  FK_DB_DATABASE,
  FK_DB_USER,
  FK_DB_PASSWORD,
  FK_DB_PORT,
  FK_DB_PREFIX,
  POSTGRES_URL,
  POSTGRES_DATABASE, 
  POSTGRES_HOST, 
  POSTGRES_PASSWORD, 
  POSTGRES_PORT, 
  POSTGRES_PREFIX, 
  POSTGRES_USER, 
  POSTGRES_SSL,
} = process.env;

const isPGSQL = POSTGRES_HOST && POSTGRES_USER && POSTGRES_PASSWORD;
module.exports = {
  "server": {
    "host": "0.0.0.0",
    "port": 8360,
    "proxy": true
  },
  "database": isPGSQL ? ({
    "type": "postgresql",
    "host": POSTGRES_HOST,
    "database": POSTGRES_DATABASE,
    "user": POSTGRES_USER,
    "password": POSTGRES_PASSWORD,
    "port": POSTGRES_PORT || "5432",
    "prefix": POSTGRES_PREFIX || "fk_",
    "connectionLimit": 1,
    "ssl": POSTGRES_SSL === 'true' || POSTGRES_URL?.includes('sslmode=require'),
  }) : ({
    "type": FK_DB_MODE,
    "host": FK_DB_HOST,
    "database": FK_DB_DATABASE,
    "user": FK_DB_USER,
    "password": FK_DB_PASSWORD,
    "port": FK_DB_PORT,
    "prefix": FK_DB_PREFIX
  })
};

const env = process.env;

const config = {
  db: {
    host: env.DB_HOST || 'spotify-match-db.cavpuqmfo5sx.us-west-1.rds.amazonaws.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'spotify_match',
    password: env.DB_PASSWORD || 'FjF9vRdRxEWuJX1SPCPb',
    database: env.DB_NAME || 'postgres',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
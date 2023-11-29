const sql = require('mssql');

const config = {
  server: 'sampatg56.database.windows.net',
  database: 'sampath7889',
  user: 'sampath',
  password: 'Ra@80muravi',
  options: {
    encrypt: true,
    trustServerCertificate: false,
    connectTimeout: 30000,
  },
};

module.exports = async function (context, req) {
  const pool = new sql.ConnectionPool(config);

  try {
    await pool.connect();
    context.log('Connected to SQL Server');

    // Execute a simple SQL query to fetch data
    const result = await pool.request().query('SELECT * FROM [dbo].[MyTable]');

    // Send the fetched data in the response
    context.res = {
      status: 200,
      body: result.recordset,
      contentType: 'application/json',
    };
  } catch (err) {
    context.log.error('Database connection error:', err);
    context.res = {
      status: 500,
      body: 'Internal Server Error',
    };
  } finally {
    if (pool.connected) {
      await pool.close();
      context.log('Closed SQL Server connection');
    }
  }
};

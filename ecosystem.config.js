module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    {
      name      : 'Admin',
      script    : 'lib/index.js',
      'exec_interpreter': 'babel-node',
      watch     : true,
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  deploy : {
    production : {
      user : '',
      host : '',
      ref  : 'origin/master',
      repo : '',
      path : '',
      'pre-setup' : 'apt-get install git && npm install -g babel',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    },
    dev : {
      user : '',
      host : 'localhost',
      ref  : 'origin/MWPmaster',
      repo : '',
      path : '',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};

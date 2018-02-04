module.exports = {
  apps: [{
    name: 'pong-server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-221-47.us-east-2.compute.amazonaws.com',
      key: '/mnt/c/Users/Christopher/.ssh/qhacks2018.pem',
      ref: 'origin/master',
      repo: 'git@github.com:caxon/pong-server.git',
      path: '/home/ubuntu/pong-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}

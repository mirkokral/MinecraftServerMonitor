const chalk = require('chalk')
const log = (t,m) => {
    console.log(chalk.bold('[' + new Date().toLocaleTimeString('en-US') + ']') + ' ' + t + ' | ' + m)
}
log(chalk.green('system'), 'Starting bot')
/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundle for production.This will take a moment....'))
webpack(webpackConfig).run((err, stats) => {
  if (err) { // a fatal error occured stop here
    console.log(chalk.red(err));
    return 1;
  }
  //errors and status is printed to console
  const jsonStats = stats.toJson();

  if (jsonStats.hasError) {
    return jsonStats.errors.map(err => console.log(chalk.red(err)));
  }

  if (jsonStats.hasWarings) {
    console.log(chalk.yellow('Webpack generated folllowing warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  //if we got this far, the build succeeded
  console.log(chalk.green('Your app has been built for production and written to /dist'));

  return 0;
});

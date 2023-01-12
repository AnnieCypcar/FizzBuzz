import { FizzBuzzController } from './fizz-buzz.js';


export const routes = (app) => {
  // Get the fizzbuzz array with a numerical input, e.g. {"n": 15}
  app.route('/fizzbuzz').post(FizzBuzzController.getAnswer);
};

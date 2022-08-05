/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

exports.handler = async event => {
  const {typeName, arguements} = event;

  if (typeName != 'Mutation') {
    throw new Error('request is not a mutation');
  }

  if (!arguements?.amount) {
    throw new Error('amount is required');
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: arguements.amount,
    currency: 'pkr',
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
};

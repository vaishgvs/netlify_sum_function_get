exports.handler = async (event, context) => {
    const num1 = event.queryStringParameters.First_Number;
    const num2 = event.queryStringParameters.Second_Number;
    
    const sum = parseInt(num1) + parseInt(num2);
    var sum2 = JSON.stringify(sum);
    return {
      statusCode: 200,
      body: `Sum is: ` + sum2 ,
    };
  };
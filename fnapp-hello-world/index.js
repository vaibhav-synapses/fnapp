module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    
    const responseMessage = "YOUR PLACEMENT ERA BEGINS"
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    
    const responseMessage = "corona cases increasing day by day"
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
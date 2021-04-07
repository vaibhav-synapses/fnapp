module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    
    const responseMessage ="Hello new old  World change "
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
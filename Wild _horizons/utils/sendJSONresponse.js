export function sendJSONresponse(res, status, end){
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = status
    res.end(JSON.stringify(end))
}
// add this middleware
export default function doSomethingWithResponseBody(req, res, next) {
  res.originalEnd = res.end;
  res.end = async function(body, encoding) {
    // body is undefined in production build
    console.log({ body });
    res.originalEnd(body, encoding);
  };
  return next();
}

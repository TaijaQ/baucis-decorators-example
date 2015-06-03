# baucis-decorators-example
Demonstrates how easy it is to decorate a [`baucis`](https://github.com/loggur?query=baucis-decorator-) REST API with custom functionality.

## What this example does
* Exposes a REST API at `/api` and `/dev/api` with 3 main endpoints, `resources`, `users`, and `logs`
* The `users` and `logs` endpoints inherit properties and decorators from `resources`
* Uses decorators to automatically add the following functionality:
  * `reserved` properties
  * automatically `update` properties
  * `init` default properties using the Express request object
  * set properties only `once`
  * adds endpoints for certain properties under development via `/dev/api`
  * `authorization` (access control) depending on the values of certain properties
  * properties for `voting`
* Exposes details of the REST API at `/api-docs` using Swagger
* Logs the Express app errors
* Sets a Stripe token depending on the Node process environment
* Redirects to `https://www.` if in the production environment
* Initializes a `mongoose` database under `mongodb://localhost/baucis-decorators-example`
* Uses `mongoose` as the session store
* Allows file uploads
* Enables gzip compression after 256 bytes

## Try it out
```bash
git clone git@github.com:loggur/baucis-decorators-example.git
cd baucis-decorators-example
node server/app.js
open localhost:8080/api-docs
```

## How it works
It's probably easiest to just check out the source code in the following order:

1. [server/app.js](https://github.com/loggur/baucis-decorators-example/blob/master/server/app.js)
2. [routes/api.js](https://github.com/loggur/baucis-decorators-example/blob/master/routes/api.js)
3. [props](https://github.com/loggur/baucis-decorators-example/tree/master/props)

And to see how each decorator works, check each repository within [this list](https://github.com/loggur?query=baucis-decorator-).
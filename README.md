# React Basic

These are basic examples of ReactJS applications. Some are mine, some are from
tutorials I'm trying online.

## Running Examples

Each example exists in a subdirectory within the `examples/` directory. In
order to run them, you have a few options. For one, you can use a local
WAMP/LAMP/MAMP server and point it to an example. You could also build
virtualhosts with NGINX or Apache and use them.

If you're like me though and **LOVE** Golang or at least have Go installed on your
machine, I've included a `server.go` file in each directory to run the
application on `127.0.0.1:8000`. To do so, run:

```
$ go run server.go
```

Navigate to your localhost and you can view the example live.

# Simple proxy

## Uses

### CURL

- GET Route - `curl localhost:3000?test=test`
- POST Route - `curl -X POST localhost:3000 -H "Content-Type: application/json" -d '{"test": "test"}'`
- POST Stream Route - `curl -X POST -N localhost:3000/stream`
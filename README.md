# dwa-poc
Desktop App / Web App Proof Of Concept with Electron and Node.js on Docker


## Configuration

- Create the environment file `.env` from the template `.env.default`
	- `make env`
- tweak `.env` file


## How To

- Install the environment
	- `make init`
- Launch the app
	- `make up`
- Re-launch the app
	- `make reset`
- Stop the app
	- `make down`
- Erase the installation
	- `make erase`


## Testing

- [static file](http://localhost:3000)
- [api](http://localhost:3000/api)


## Settings Proxy

Create a `.npmrc` file
```
analytics=false
proxy=http://user:pass@proxy.com:port
https-proxy=http://user:pass@proxy.com:port

```

Update `docker-compose.yml`
```
environment:
  - NO_PROXY
  - no_proxy
  - http_proxy
  - HTTP_PROXY
  - https_proxy
volumes:
  - .npmrc:/home/node/.npmrc:ro
```

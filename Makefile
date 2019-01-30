-include .env
export $(shell sed 's/=.*//' .env)

export NODE_HTTP_URL=http://${NODE_HOSTNAME}:${HTTP_PORT}
export NODE_EXTERNAL_URL=${NODE_HTTP_URL}

.PHONY: env_var
env_var: # Print environnement variables
	@cat .env
	@echo
	@echo NODE_HTTP_URL=${NODE_HTTP_URL}
	@echo NODE_EXTERNAL_URL=${NODE_EXTERNAL_URL}

.PHONY: env
env: # Create .env and tweak it before initialize
	cp .env.default .env

.PHONY: initialize
initialize: init

.PHONY: init
init: # Install npm dependencies
	docker-compose run --rm --name npm-install ${NODE_CONTAINER} npm install

.PHONY: init-shell
init-shell: # Open a shell on a fresh container
	docker-compose run --rm --name node-shell ${NODE_CONTAINER} /bin/bash

.PHONY: erase
erase:
	rm -rf node_modules package-lock.json

.PHONY: pull
pull: # Pull the docker image
	docker pull node:${TAG}

.PHONY: config
config: # Show docker-compose configuration
	docker-compose -f docker-compose.yml config

.PHONY: up
up: # Start containers and services
	docker-compose -f docker-compose.yml up -d

.PHONY: down
down: # Stop containers and services
	docker-compose -f docker-compose.yml down

.PHONY: start
start: # Start containers
	docker-compose -f docker-compose.yml start

.PHONY: stop
stop: # Stop containers
	docker-compose -f docker-compose.yml stop

.PHONY: restart
restart: # Restart container
	docker-compose -f docker-compose.yml restart

.PHONY: delete
delete: down erase

.PHONY: mount
mount: init up perm

.PHONY: reset
reset: down up

.PHONY: hard-reset
hard-reset: delete mount

.PHONY: logs
logs:
	docker-compose logs -f

.PHONY: shell
shell: # Open a shell on a started container
	docker exec -it ${NODE_CONTAINER} /bin/bash

.PHONY: url
url:
	@echo ${NODE_EXTERNAL_URL}

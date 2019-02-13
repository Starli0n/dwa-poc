-include .env
export $(shell sed 's/=.*//' .env)

export NODE_HTTP_URL=http://${NODE_HOSTNAME}:${HTTP_PORT}
export ADMINER_HTTP_URL=http://${NODE_HOSTNAME}:${ADMINER_HTTP_PORT}

.PHONY: env_var
env_var: # Print environnement variables
	@cat .env
	@echo
	@echo NODE_HTTP_URL=${NODE_HTTP_URL}
	@echo ADMINER_HTTP_URL=${ADMINER_HTTP_URL}

.PHONY: env
env: # Create .env and tweak it before initialize
	cp .env.default .env
	cp server/web/.env.default server/web/.env
	cp server/desktop/.env.default server/desktop/.env

.PHONY: install
install:
	mkdir -p client/{common,desktop,web}
	mkdir -p server/{common,desktop,web}
	mkdir -p database
	cd server/common && npm install
	cd server/web && npm install
	cd server/desktop && npm install

.PHONY: initialize
initialize: init

.PHONY: init
init: # Install npm dependencies
	docker-compose run --rm --name npm-install ${WEB_CONTAINER} npm install
	docker-compose run --rm --name npm-install ${DESKTOP_CONTAINER} npm install

.PHONY: init-shell-web
init-shell-web: # Open a shell on a fresh container
	docker-compose run --rm --name node-shell ${WEB_CONTAINER} /bin/bash

.PHONY: init-shell-desktop
init-shell-desktop: # Open a shell on a fresh container
	docker-compose run --rm --name node-shell ${DESKTOP_CONTAINER} /bin/bash

.PHONY: erase
erase:
	rm -rf server/common/node_modules
	rm -rf server/web/node_modules
	rm -rf server/desktop/node_modules
	rm -rf database

.PHONY: pull
pull: # Pull the docker image
	docker pull node:${NODE_TAG}
	docker pull mysql:${MYSQL_TAG}
	docker pull adminer:${ADMINER_TAG}

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

.PHONY: shell-web
shell-web: # Open a shell on a started container
	docker exec -it ${WEB_CONTAINER} /bin/bash

.PHONY: shell-desktop
shell-desktop: # Open a shell on a started container
	docker exec -it ${DESKTOP_CONTAINER} /bin/bash

.PHONY: web
web:
	cd server/web && npm run start-local

.PHONY: desktop
desktop:
	cd server/desktop && npm run start-local

.PHONY: db-up
db-up: # Start containers and services
	docker-compose -f docker-compose-db.yml up -d

.PHONY: db-down
db-down: # Stop containers and services
	docker-compose -f docker-compose-db.yml down

.PHONY: url
url:
	@echo App: ${NODE_HTTP_URL}
	@echo Adm: ${ADMINER_HTTP_URL}

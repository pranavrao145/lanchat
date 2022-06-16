setup: configure build

all: stop setup run

configure:
	sh ./scripts/configure.sh

build:
	docker-compose build

run:
	docker-compose up

stop:
	docker-compose down --rmi all

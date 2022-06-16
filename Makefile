setup: configure build

all: reset setup run

configure:
	echo "Configuring LANChat..."
	echo "REACT_APP_SERVER_URL=\"ws://$(shell hostname -i | tr -s ' ' | cut -d ' ' -f 1):8080/ws\"" > .env
	echo "HTTP_PROXY=\"$(shell hostname -i | tr -s ' ' | cut -d ' ' -f 1):8080\"" >> .env
	echo "LANChat configured successfully."

build:
	echo "Building LANChat..."
	docker-compose build
	echo "LANChat built successfully."

run:
	echo "Starting LANChat..."
	docker-compose up

reset:
	echo "Resetting LANChat..."
	docker-compose down --rmi all || true
	docker rm lanchat_server || true
	docker rm lanchat_client || true
	echo "LANChat reset successfully."

setup: reset configure build

all: reset setup run

IP_ADDR=$(shell hostname -i | tr -s ' ' | cut -d ' ' -f 1)

configure:
	@echo "Configuring LANChat..."
	echo "REACT_APP_SERVER_URL=\"ws://$(IP_ADDR):8080/ws\"" > .env
	echo "HTTP_PROXY=\"$(IP_ADDR):8080\"" >> .env
	@echo "LANChat configured successfully."

build:
	@echo "Updating local repository..."
	git pull origin master
	@echo "Building LANChat..."
	docker-compose build
	@echo "LANChat built successfully."

run:
	@echo "Starting LANChat..."
	docker-compose up -d
	@echo "LANChat started successfully. You can open the app on any device on your network by visiting the following URL: http://$(IP_ADDR):3000"

clean stop reset:
	@echo "Stopping and resetting LANChat..."
	docker-compose down --rmi all || true
	@docker rm lanchat_server 2> /dev/null || true
	@docker rm lanchat_client 2> /dev/null || true
	@echo "LANChat stopped and reset successfully."

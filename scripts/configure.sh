#!/bin/bash

echo "Configuring LANChat..."

docker network create --subnet=172.19.0.0/16 lanchat_net 2> /dev/null

echo "App setup complete. Run \"make run\" to run the application."

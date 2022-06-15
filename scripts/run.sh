#!/bin/bash

echo "Starting LANChat..."

SERVER_IP="172.19.0.5"
CLIENT_IP="172.19.0.6"

docker run --rm -d --network lanchat_net --ip $SERVER_IP -p 8080:8080 --name lanchat_server pranavrao145/lanchat_server
docker run --rm -d --network lanchat_net --ip $CLIENT_IP -p 3000:3000 --name lanchat_client pranavrao145/lanchat_client

echo "LANChat started successfully. You can go to http://$CLIENT_IP:3000 in your browser to acccess it."

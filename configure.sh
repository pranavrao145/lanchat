#!/bin/bash

SERVER_URL="$(hostname -i | tr -s ' ' | cut -d ' ' -f 1)"
echo "REACT_APP_SERVER_URL=\"ws://$SERVER_URL:8080/ws\"" > client/.env.local

echo "IMPORTANT: The URL to LANChat on your network is: http://$SERVER_URL:3000."

echo "You can now run docker-compose up to start the app!"

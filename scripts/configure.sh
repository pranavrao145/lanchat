#!/bin/bash

CURRENT_IP="$(hostname -i | tr -s ' ' | cut -d ' ' -f 1)"

echo "REACT_APP_SERVER_URL=\"ws://$CURRENT_IP:8080/ws\"" > client/.env.local

echo "LANChat configured. You can run the app by executing the following command:"
echo "./scripts/start.sh"

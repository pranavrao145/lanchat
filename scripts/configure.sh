#!/bin/bash

echo "REACT_APP_SERVER_URL=\"ws://$(hostname -i | tr -s ' ' | cut -d ' ' -f 1):8080/ws\"" > .env

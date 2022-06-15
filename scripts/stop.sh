#!/bin/bash

echo "Stopping LANChat..."

docker stop lanchat_server 2> /dev/null
docker stop lanchat_client 2> /dev/null

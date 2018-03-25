#!/bin/sh

if [[ -z "${NODE_ENV}" ]]; then
    NODE_ENV="development"
else
    NODE_ENV="${NODE_ENV}"
fi

if [ "$NODE_ENV" == "production" ]; then
    chown -R node:node /home/node/
fi

exec "$@"
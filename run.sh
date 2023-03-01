#!/bin/bash
echo "RUN_ENV: $RUN_ENV"

if [ $RUN_ENV = "production" ]
then
    npm run build;
    node build;
else
    npm run dev
fi

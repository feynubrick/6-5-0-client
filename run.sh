#!/bin/bash
echo "<<<<<<<<<<<<<<<<<<<<<<<<<<"
printenv;
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>"
echo ""

if [ "$RUN_ENV" = "production" ]
then
    echo "running node server..."
    node build;
else
    echo "running dev server..."
    # npm run dev --host $APP_HOST --port $APP_PORT;
    npx vite dev --host --port $APP_PORT;
fi

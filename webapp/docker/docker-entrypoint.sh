#!/bin/bash
set -e

if  ! [ -e "/home/node/app/.env" ] ; then
    echo "[ ****************** ] Copiando '.exemplo_env' para '.env'"
    cp /home/node/app/.exemplo_env /home/node/app/.env

    sed -i "s/@@VUE_APP_API_HOST@@/$VUE_APP_API_HOST/g" /var/www/salic/application/configs/application.ini
    sed -i "s/@@VUE_APP_API_PORT@@/$VUE_APP_API_PORT/g" /var/www/salic/application/configs/application.ini
    sed -i "s/@@VUE_APP_WEBSOCKET_HOST@@/$VUE_APP_WEBSOCKET_HOST/g" /var/www/salic/application/configs/application.ini
    sed -i "s/@@VUE_APP_WEBSOCKET_PORT@@/$VUE_APP_WEBSOCKET_PORT/g" /var/www/salic/application/configs/application.ini
    sed -i "s/@@VUE_APP_JWT_SECRET@@/$VUE_APP_JWT_SECRET/g" /var/www/salic/application/configs/application.ini
    
    sed -i "s/@@NODE_CONFIG_ENV@@/$NODE_CONFIG_ENV/g" /var/www/salic/application/configs/application.ini
    sed -i "s/@@NODE_ENV@@/$NODE_ENV/g" /var/www/salic/application/configs/application.ini
    sed -i "s/@@WEBSOCKET_HOST@@/$WEBSOCKET_HOST/g" /var/www/salic/application/configs/application.ini
    sed -i "s/@@WEBSOCKET_PORT@@/$WEBSOCKET_PORT/g" /var/www/salic/application/configs/application.ini
fi

exec "$@"

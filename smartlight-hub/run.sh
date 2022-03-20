#!/usr/bin/with-contenv bashio
set +u

export SL_USER_ID=$(bashio::config 'user_id')

bashio::log.info "Starting SmartLight hub service."
bashio::log.info "User: ${SL_USER_ID}."

# npm run update
npm run start

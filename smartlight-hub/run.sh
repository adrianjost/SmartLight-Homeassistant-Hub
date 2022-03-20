#!/usr/bin/with-contenv bashio
set +u

export SL_EMAIL=$(bashio::config 'email')
export SL_PASSWORD=$(bashio::config 'password')

bashio::log.info "Starting SmartLight hub service."
bashio::log.info "User: ${SL_EMAIL}."

# npm run update
npm run start

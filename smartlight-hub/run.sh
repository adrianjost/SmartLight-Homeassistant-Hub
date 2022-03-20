#!/usr/bin/with-contenv bashio
set +u

export SL_EMAIL=$(bashio::config 'email')
export SL_PASSWORD=$(bashio::config 'password')
export SL_LOCAL_LOGGING_ENABLED=$(bashio::config 'local_logging')

bashio::log.info "Starting SmartLight hub service."
bashio::log.info "User: ${SL_EMAIL}."

# npm run update
npm run start

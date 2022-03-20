//@ts-check
const Sentry = require("@sentry/node");

const loggingEnabled = process.env.SL_LOCAL_LOGGING_ENABLED === "true";

Sentry.init({
	dsn: "https://1fae0f6448734c33b31f06523a55e614@o304407.ingest.sentry.io/1868577",
	tracesSampleRate: process.env.NODE_ENV === "production" ? 1.0 : 0.0,
});

function log() {
	error("Method .log does not exist on object, please use .info instead.");
}

function info(...attrs) {
	if (loggingEnabled) {
		console.log(...attrs);
	}
}

function warn(...attrs) {
	if (loggingEnabled) {
		console.warn(...attrs);
	}
	Sentry.captureMessage(attrs.join(" - "), Sentry.Severity.Warning);
}

function error(...attrs) {
	if (loggingEnabled) {
		console.error(...attrs);
	}
	Sentry.captureMessage(attrs.join(" - "), Sentry.Severity.Error);
}

module.exports = {
	log,
	info,
	warn,
	error,
};

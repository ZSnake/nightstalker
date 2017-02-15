'use strict';
const mongoDatabase = require('./dbConfig').url;
const MongoClient = require('mongodb').MongoClient;
const Bluebird = require('bluebird');

const connectMongoDb = (dbUrl) => (
	new Bluebird((resolve, reject) => {
		MongoClient.connect(dbUrl || mongoDatabase, (err, db) => {
			if (err) {
				return reject(err);
			}
			resolve(db);
		});
	})
);

module.exports = {
	connectMongoDb,
};

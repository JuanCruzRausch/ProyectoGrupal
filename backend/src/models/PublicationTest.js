const { Schema, model } = require('mongoose');
const validator = require('validator');

const publicationTestSchema = new Schema({});

const PublicationTest = model('PublicationTest', publicationTestSchema);

module.exports = PublicationTest;

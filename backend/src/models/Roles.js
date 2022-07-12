const {Schema, model} = require('mongoose');

const RolesSchema = new Schema({
    rol_id: String,
    name: String,
    description: String
});

const Roles  = model('Roles', RolesSchema);

module.exports = Roles;
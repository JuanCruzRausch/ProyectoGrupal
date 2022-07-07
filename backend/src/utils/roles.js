const {checkPermissions} = require('./authorizeAccessToken')

exports.roles = {
    admin: checkPermissions(['create:category', 'create:publication', 'create:purchase', 'create:query', 'create:questions', 'create:report', 'create:reviews', 'delete:publication', 'delete:questions', 'delete:reviews', 'delete:users', 'read:sales', 'read:stats', 'update:profile', 'update:publication', 'update:query', 'update:questions', 'update:report', 'update:roles'], true),
    moderator: checkPermissions(['delete:publication', 'delete:questions', 'delete:reviews', 'delete:users', 'update:profile', 'update:query', 'update:report'], true),
    common: checkPermissions(['create:query', 'create:report', 'update:profile'], true),
    buyer: checkPermissions(['create:purchase', 'create:questions', 'create:reviews'], true),
    seller: checkPermissions(['create:publication', 'delete:publication', 'read:sales', 'update:publication', 'update:questions'], true),
}

var phone = require('../models/phone');
// List of all Phones
exports.phone_list = function(req, res) {
res.send('NOT IMPLEMENTED: Phone list');
};
// for a specific Phone.
exports.phone_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Phone detail: ' + req.params.id);
};
// Handle Phone create on POST.
exports.phone_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Phone create POST');
};
// Handle Phone delete form on DELETE.
exports.phone_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Phone delete DELETE ' + req.params.id);
};
// Handle Phone update form on PUT.
exports.phone_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Phone update PUT' + req.params.id);
};

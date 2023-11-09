var phone = require('../models/phone');
// List of all Phones
exports.phone_list = async function (req, res) {
    try {
        thePhone = await phone.find();
        res.send(thePhone);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}
// for a specific Phone.
exports.phone_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Phone detail: ' + req.params.id);
};
// Handle Phone create on POST.
exports.phone_create_post =  async function (req, res) {
    console.log(req.body);
    let document = new phone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.phone_name = req.body.phone_name;
    document.phone_color = req.body.phone_color;
    document.phone_cost = req.body.phone_cost;
    try {
      let result = await document.save();
      res.send(result);
    } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
    }
  };
// Handle Phone delete form on DELETE.
exports.phone_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Phone delete DELETE ' + req.params.id);
};
// Handle Phone update form on PUT.
exports.phone_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Phone update PUT' + req.params.id);
};
exports.phone_view_all_Page = async function (req, res) {
    try {
      thePhone = await phone.find();
      console.log(thePhone);
      res.render("phone", {
        title: "Phone Search Results",
        results: thePhone
      });
    } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
    }
  };
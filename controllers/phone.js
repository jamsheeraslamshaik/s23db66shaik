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
// for a specific Phone..
exports.phone_detail = async function(req, res) {
  console.log("detail" + req.params.id)
  try {
  result = await phone.findById( req.params.id)
  res.send(result)
  } catch (error) {
  res.status(500)
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
  };
// Handle Phone create on POST.
exports.phone_create_post =  async function (req, res) {
    console.log(req.body);
    let document = new phone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"phone_type":"goat", "cost":12, "size":"large"}
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
// Handle update form on PUT.
exports.phone_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await phone.findById( req.params.id)
// Do updates of properties
if(req.body.phone_name)
toUpdate.phone_name = req.body.phone_name;
if(req.body.phone_color) toUpdate.phone_color = req.body.phone_color;
if(req.body.phone_cost) toUpdate.phone_cost = req.body.phone_cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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
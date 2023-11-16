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
  // Handle phone delete on DELETE.
exports.phone_delete = async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await phone.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
  };
  
 
  // Handle a show one view with id specified by query
  exports.phone_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
  result = await phone.findById( req.query.id)
  res.render('phonedetail',
  { title: 'phone Detail', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

  // Handle building the view for creating a phone.
// No body, no in path parameter, no query.
// Does not need to be async
exports.phone_create_Page = function(req, res) {
  console.log("create view")
  try{
  res.render('phonecreate', { title: 'Phone Create'});
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

  // Handle building the view for updating a phone.
// query provides the id
exports.phone_update_Page = async function(req, res) {
  console.log("update view for item "+req.query.id)
  try{
  let result = await phone.findById(req.query.id)
  res.render('phoneupdate', { title: 'Phone Update', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

  // Handle a delete one view with id from query
exports.phone_delete_Page = async function(req, res) {
  console.log("Delete view for id " + req.query.id)
  try{
  result = await phone.findById(req.query.id)
  res.render('phonedelete', { title: 'Phone Delete', toShow:
  result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };
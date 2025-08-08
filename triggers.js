function doGet(e) {
  var params = JSON.stringify(e);
  return HtmlService.createHtmlOutput(params);
}

function doPost(e, params) {
  params = JSON.parse(e.postData.contents); //The content text of the POST body
  if(params.task_name == copperSetupTaskName){createCopperSetup(params);}else{updateCopperStage(params);}
  return params;
}
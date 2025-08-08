const createCopperSetup = (params) => {

let createopp = createCopperOpp(params);
let opportunity_id = createopp.id;


let updateasana = AsanaUpdateproject(params, opportunity_id);
UpdateCopperRelations(params,opportunity_id);
UpdateCopperFields(params,opportunity_id);


return params;
}
const createCopperOpp = (params) => {
    let body = {
                "name": params.project_name,
                "primary_contact_id": dummyContact,
              }
      let options = {
                   "contentType": "application/json",
                   "headers":{"X-PW-AccessToken": copperAPIkey,
                              "X-PW-Application": "developer_api",
                              "X-PW-UserEmail": copperEmail},
                   "payload": JSON.stringify(body)
                   }
 let response = UrlFetchApp.fetch('https://api.prosperworks.com/developer_api/v1/opportunities', options);
 response = JSON.parse(response);

  
  body = {
    "primary_contact_id": null,
  }
  options = {
                    'method' : 'put',
                   "contentType": "application/json",
                   "headers":{"X-PW-AccessToken": copperAPIkey,
                              "X-PW-Application": "developer_api",
                              "X-PW-UserEmail": copperEmail},
                   "payload": JSON.stringify(body)
                   }
  UrlFetchApp.fetch('https://api.prosperworks.com/developer_api/v1/opportunities/'+response.id, options);

  return response
}

const AsanaUpdateproject = (params, opportunity_id) => {

let copper_opp_id = opportunity_id.toString();
let projectID = params.project_id.toString();
     let body = {
                    "data": {
                          "custom_fields": {
                                "YOUR_COPPER_CUSTOM_FIELD_ID_1": copper_opp_id,
"YOUR_COPPER_CUSTOM_FIELD_ID_2": "YOUR_COPPER_DEAL_URL_PREFIX"+copper_opp_id
                    }
                }
}
     let options = {
                    'method' : 'put',
                   "contentType": "application/json",
                   "headers":{"Authorization": asanaAuth},
                   "payload": JSON.stringify(body)
                   }
                   
let response = UrlFetchApp.fetch('https://app.asana.com/api/1.0/projects/'+projectID, options);
response = JSON.parse(response);
return response
}

const UpdateCopperRelations = (params,opportunity_id) => {
let lawyer;
let lawfirm;
let projectID = params.project_id.toString();;
let copper_opp_id = opportunity_id.toString();

let asanaProject = getAsanaProject(projectID);
let custom_field_value = asanaProject.data.custom_fields;

  custom_field_value.forEach((value)=>{
    if(value.gid == custom_field_Lawyer){lawyer = value.text_value}
    if(value.gid == custom_field_Lawfirm){lawfirm = value.text_value}
  })
  var data = {
    'lawyer': lawyer,
    'lawfirm': lawfirm,
    'opportunity_id': copper_opp_id
  };
  var options = {
  'method' : 'post',
  'contentType': 'application/json',
  // Convert the JavaScript object to a JSON string.
  'payload' : JSON.stringify(data)
};
UrlFetchApp.fetch(SendToRelateLawyerandLawfirm, options);
}

const UpdateCopperFields = (params, opportunity_id) => {
let tin_id, Social_Security, Case_number,County, Court_Supervise;

let projectID = params.project_id.toString();
let copper_opp_id = opportunity_id.toString();
let asanaProject = getAsanaProject(projectID);
let custom_field_value = asanaProject.data.custom_fields;

  custom_field_value.forEach((value)=>{
    if(value.gid == custom_field_Tinid){tin_id = value.text_value}
    if(value.gid == custom_field_Social_Security){Social_Security = value.text_value}
    if(value.gid == custom_field_Case_Number){Case_number = value.text_value}
    if(value.gid == custom_field_County){County = value.display_value}
    if(value.gid == custom_field_Court_Supervise){Court_Supervise = value.display_value}
  })
  var data = {
    'tin_id': tin_id,
    'Social_Security': Social_Security,
    'Case_number': Case_number,
    'County': County,
    'Court_Supervise': Court_Supervise,
    'opportunity_id': copper_opp_id
  };
  var options = {
  'method' : 'post',
  'contentType': 'application/json',
  // Convert the JavaScript object to a JSON string.
  'payload' : JSON.stringify(data)
};
UrlFetchApp.fetch(SendToUpdateCustomFields, options);
}

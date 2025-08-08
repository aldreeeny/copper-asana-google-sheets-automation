const updateCopperStage = (params) => {
  let opportunity_id;
  let projectID = params.project_id.toString();
  
  let asanaProject = getAsanaProject(projectID);
  let custom_field_value = asanaProject.data.custom_fields;

  custom_field_value.forEach((value)=>{
    if(value.gid == custom_field_Opportunity_ID){opportunity_id = value.text_value}
  })
let copper_stage;

  switch(params.task_name) {
  case 'Copper Onboarding (Automated)':
    copper_stage = "COPPER_ONBOARDING_STAGE_ID"; // Replace with actual stage ID
    break;
  case 'Copper Administration (Automated)':
     copper_stage = "COPPER_ADMINISTRATION_STAGE_ID"; // Replace with actual stage ID
    break;
  case 'Copper Approval to Close (Automated)':
    copper_stage = "COPPER_APPROVAL_TO_CLOSE_STAGE_ID"; // Replace with actual stage ID
    break;
  case 'Copper Offboarding (Automated)':
    copper_stage = "COPPER_OFFBOARDING_STAGE_ID"; // Replace with actual stage ID
    break;

}

let body = {
    "pipeline_stage_id": copper_stage,
  }
let  options = {
                    'method' : 'put',
                   "contentType": "application/json",
                   "headers":{"X-PW-AccessToken": copperAPIkey,
                              "X-PW-Application": "developer_api",
                              "X-PW-UserEmail": copperEmail},
                   "payload": JSON.stringify(body)
                   }
  UrlFetchApp.fetch('https://api.prosperworks.com/developer_api/v1/opportunities/'+opportunity_id, options);
}
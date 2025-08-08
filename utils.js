const getAsanaProject = (projectID) => {
  let options = {"headers":{"Authorization": asanaAuth}}
  let response = UrlFetchApp.fetch('https://app.asana.com/api/1.0/projects/'+projectID, options);
  response = JSON.parse(response);
  return response;
}
// client-side js
// run by the browser each time your view template is loaded

(function(){

  //const logger = document.getElementById("logger");
  //const form = document.getElementById("form");
  const fileInput = document.getElementById("file-uploader");
  const resetButton = document.getElementById("reset-button");
  //const submitButton = document.getElementById("submit-button");
  
  const fileForm = document.forms[0];
  const file = fileForm.elements['file'];
  
  const resetForm = () => {
    if (file.files[0]) {
      fileForm.reset();
    }
  };
  
  /*const submit = () => {
    form.submit();
  };*/
  
  /*const log = () => {
    console.log(file.files[0]);
  };*/
  
  //logger.addEventListener("click", log);
  //fileInput.addEventListener("change", displayFileName);
  //submitButton.addEventListener("click", submit);
  
  resetButton.addEventListener("click", resetForm);
  
  resetForm();
  
})()
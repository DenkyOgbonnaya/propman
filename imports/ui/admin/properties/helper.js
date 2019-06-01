// Convert file to base64 string
export const fileToBase64 = (file) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        return new Promise(resolve => {

            var reader = new FileReader();
            // Read file content on file loaded event
            reader.onload = function(event) {
              resolve(reader.result);
            };
            // Convert data to base64 
            reader.readAsDataURL(file);
          });
        
    } else {
        alert('The File APIs are not fully supported in this browser.');
      }
    }

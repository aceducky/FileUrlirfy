import upload_services from "./upload_services";
import { useState } from "react";
import Card from "./components/Card";

function Form({ files, setFiles, service, setService }) {
  const [isValid,setIsValid] = useState(false);
  function validateFiles(inputFiles) {
    const newFilesArray = [...inputFiles];

    if (newFilesArray.length === 0) {
      alert("Please select a file");
      return;
    }

    const allFiles = service.supportsMultipleFiles ? [...files, ...newFilesArray] : newFilesArray;

    if (allFiles.some(file => file.size > service.maxFileSize)) {
      alert(`Each file must be less than ${service.maxFileSize / (1024 * 1024)} MB`);
      return;
    }
    setIsValid(true);
    setFiles(allFiles);
  }

  function handleUpload() {
    if (files.length === 0) {
      alert("No files to upload");
      return;
    }
    service.uploadFunction(files);
  }

  return (
    <div>
      <form>
        <label>
          Select an upload service:
          <select
            onChange={(e) => setService(upload_services[e.target.value])}
            value={service.name}
          >
            {/* eslint-disable-next-line no-unused-vars */}
            {Object.entries(upload_services).map(([_, service]) => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </label>

        {service.component && <service.component files={files} />}
        
        <label id="file-input-label">
          Drop your files here or click this:
          <input
            type="file"
            name="file input"
            id="file-input"
            multiple={service.supportsMultipleFiles}
            onChange={(e) => validateFiles(e.target.files)}
          />
        </label>
        
       {isValid &&
          <button type="button" id="upload-files-button" onClick={handleUpload}>
            Upload Files
        </button>
      }
      </form>

      <Card files={files} setFiles={setFiles} />
    </div>
  );
}

export default Form;

import upload_services from "./upload_services";
import { useState } from "react";

function Form({ files, setFiles }) {
  const [service, setService] = useState(upload_services["file.io"]);

  return (
    <div>
      <label>
        Select an upload service
        <select
          onChange={(e) => {
            setService(upload_services[e.target.value]);
          }}
          value={service.name}
        >
          {Object.entries(upload_services).map(([_, provider]) => {
            return (
              <option key={provider.name} value={provider.name}>
                {provider.name}
              </option>
            );
          })}
        </select>
      </label>

      <service.component files={files} />
      <label id="file-input-label">
        Drop your files here or click to upload
        <input type="file" name="file input" id="file-input" />
      </label>
    </div>
  );
}

export default Form;

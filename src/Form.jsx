import { useState } from "react";
import upload_services from "./upload_services";
import UploadProviders from "./UploadProviders";
import Info from "./Info";
function Form({ files, setFiles }) {
    const [provider, setProvider] = useState(upload_services["file.io"]);

    function handleFiles(e) {
        if (!e.target.files) return;
        let totalFileSize =  e.target.files.reduce((total, file) => total + file.size, 0);
        //zip files and logic
    }
    return (
        <div>
            <UploadProviders provider={provider} setProvider={setProvider} />
            <Info provider={provider} />
            <label id="file-input-label">
                Drop your files here or click here
                <input
                    type="file"
                    name="file input"
                    id="file-input"
                    multiple
                    capture
                    onChange={handleFiles}
                />
            </label>
        </div>
    );
}

export default Form;

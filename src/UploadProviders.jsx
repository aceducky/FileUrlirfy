import upload_services from "./upload_services";

function UploadProviders({ provider, setProvider }) {
    function handleChange(e) {
        console.log("changed- hooray");
        setProvider(e.target.value)
    }
    return (
        <div>
            <label>
                Select an upload provider: 
                <select name="upload provider" id="upload-provider" onChange={handleChange}>
                    {Object.entries(upload_services).map(([_, provider]) => {
                        return (
                            <option key={provider.name} value={provider.name}>
                                {provider.name}
                            </option>
                        );
                    })}
                </select>
            </label>
        </div>
    );
}

export default UploadProviders;

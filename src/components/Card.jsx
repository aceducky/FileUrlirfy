function Card({ files, setFiles }) {
  const handleDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const renderPreview = (file) => {
    switch (file.type.split("/")[0]) {
      case "image":
        return <img src={URL.createObjectURL(file)} alt={file.name} />;
      case "video":
        return (
          <video controls>
            <source src={URL.createObjectURL(file)} type={file.type} />
            Your browser does not support the video tag.
          </video>
        );
      case "audio":
        return (
          <audio controls>
            <source src={URL.createObjectURL(file)} type={file.type} />
            Your browser does not support the audio element.
          </audio>
        );
      default:
        return <span>No preview available</span>;
    }
  };

  return files.length > 0 ? (
    <div className="card-container">
      {files.map((file) => (
        <div key={file.name} className="card">
          <div className="file-preview">{renderPreview(file)}</div>
          <div className="card-details">
            <div>Name: {file.name}</div>
            <div>Size: {(file.size / 1024).toFixed(2)} KB</div>
          </div>
          <button
            className="delete-button"
            onClick={() => handleDelete(file.name)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p>No files selected</p>
  );
}

export default Card;

import { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
    const [files, setFiles] = useState([]);
    return <Form files={files} setFiles={setFiles} />;
}

export default App;

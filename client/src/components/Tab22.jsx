
import axios from 'axios';

import React,{Component} from 'react';

class Tab22 extends Component {

    state = {

    selectedFile: null
    };
    onFileChange = event => {

    this.setState({ selectedFile: event.target.files[0] });

    };
    onFileUpload = () => {
    const formData = new FormData();

    formData.append(
        "media",
        this.state.selectedFile,
        this.state.selectedFile.name
    );
    

    console.log(this.state.selectedFile);
    

    axios.post("http://localhost:8000/api/media/new", formData);
    };

    fileData = () => {
    
    if (this.state.selectedFile) {
        return (
            <div>
                <h2>File Details:</h2>
                <p>File Name: {this.state.selectedFile.name}</p>
                <p>File Type: {this.state.selectedFile.type}</p>
                <p>Last Modified:{" "}{this.state.selectedFile.lastModifiedDate.toDateString()}</p>
            </div>
        );
        } else {
            return (
            <div>
                <br />
                <h4>Choose before Pressing the Upload button</h4>
            </div>
        );
        }
    };
    
    render() {
    
        return (
        <div>
            <h1>
                Upload your Music!
            </h1>
            <h3>
                Select mp3
            </h3>
            <div>
                <form encType="multipart/form-data" method="post">
                <input type="file" onChange={this.onFileChange} name="media" />
                <button onClick={this.onFileUpload}>
                    Upload!
                </button>
                </form>
            </div>
            {this.fileData()}
        </div>
        );
    }
    }

export default Tab22;
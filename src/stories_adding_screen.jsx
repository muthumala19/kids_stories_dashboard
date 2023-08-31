import './stories_adding_screen.css'
import {Box, CircularProgress, TextField} from "@mui/material";
import {Button} from "rsuite";
import {useState} from "react";
import {addDoc, collection} from "firebase/firestore"
import {database} from "./firebase"
import validator from "./validate_story";


export default function StoryAddingInterface() {
    const [story, setStory] = useState("");
    const [uploading, setUploading] = useState(false);
    const uploadStory = async () => {
        try {
            setUploading(true);
            const json = JSON.parse(story.toString());
            if (validator(json)) {
                await addDoc(collection(database, "stories"), json)
                setStory('');
            }
        } catch (e) {
            alert('Invalid Story format, Upload Denied.')
        } finally {
            setUploading(false);
        }
    };

    return (<Box component="form" className={"wrapper"}>
        <p align="left">Enter Story : </p>
        <TextField className={"label_input_wrapper"}
                   type="text"
                   value={story}
                   onChange={(newValue) => {
                       return setStory(newValue.target.value);
                   }}
                   id="outlined-basic"
                   label="Enter Story"
                   variant={"outlined"}
                   size="medium"
                   multiline={true}
                   rows={20}
                   InputLabelProps={{style: {color: "#555555FF"}}}
                   InputProps={{
                       style: {
                           color: "#555555FF", borderRadius: 20, width: "auto"
                       }
                   }}
        />
        <br/>
        <div align={"center"} className={"buttongroup_wrapper"}>
            <div>

                <Button className={"preview_button"}
                        onClick={() => console.log(story)}>Preview</Button>
            </div>
            <div>{!uploading ?
                <Button className={"submit_button"} onClick={uploadStory}>Submit and Upload</Button> :
                <CircularProgress/>
            }

            </div>
        </div>
    </Box>);
}
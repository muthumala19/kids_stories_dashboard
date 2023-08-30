import './stories_adding_screen.css'
import {Box, TextField} from "@mui/material";
import {Button} from "rsuite";
import {useState} from "react";
import {addDoc, collection} from "firebase/firestore"
import {database} from "./firebase"


export default function StoryAddingInterface() {
    const [story, setStory] = useState("");
    const uploadStory = async () => {
        const json = JSON.parse(story.toString());
        await addDoc(collection(database, "stories"), json)
        console.log(json.title);
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
        <div align={"right"} className={"buttongroup_wrapper"}>
            <Button className={"preview_button"} onClick={() => console.log(story)}>Preview</Button>
            <Button className={"submit_button"} onClick={uploadStory}>Submit and Upload</Button>
        </div>
    </Box>);
}
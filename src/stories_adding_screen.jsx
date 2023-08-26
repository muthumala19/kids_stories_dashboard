import './stories_adding_screen.css'
import {Box, TextField} from "@mui/material";
import { Button } from "rsuite";


export default function StoryAddingInterface() {
    return (<Box component="form" className={"wrapper"}>
        <p align="left">Enter Story : </p>
        <TextField className={"label_input_wrapper"}
                   type="text"
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
            <Button  className={"preview_button"}>Preview</Button>
            <Button className={"submit_button"}>Submit and Upload</Button>
        </div>


    </Box>);
}
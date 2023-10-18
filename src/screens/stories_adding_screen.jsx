import './stories_adding_screen.css';
import {Box, CircularProgress, TextField} from '@mui/material';
import {Button} from 'rsuite';
import {useState} from 'react';
import axios from 'axios';
import SnackbarAlert from "../components/snackbar_alert";

export default function StoryAddingInterface() {
    const [story, setStory] = useState('');
    const [uploading, setUploading] = useState(false);
    const [success, setSuccess] = useState({success: null, message: null}); // Add state for success message


    const handleCloseSnackbar = () => {
        setSuccess({success: null, message: null}); // Close the Snackbar
    };

    const uploadStory = async () => {
        try {
            setUploading(true);
            const json = JSON.parse(story.toString());
            axios
                .post('http://localhost:5000/validateStory', json)
                .then((res) => {
                    console.log(res.data);
                    setSuccess({success: true, message: res.data});
                    setStory('');
                })
                .catch((err) => {
                    if (err.response) {
                        setSuccess({success: false, message: err.response.data});
                        console.log(err.response.data);
                    } else {
                        console.log('Network error or server is down.');
                    }
                })
                .finally(() => {
                });

        } catch (e) {
            setSuccess({success: false, message: 'Invalid story format.'});
        } finally {
            setUploading(false);
        }
    };

    return (
        <Box component="form" className={'wrapper'}>
        <p align="left">Enter Story : </p>
            <TextField
                className={'label_input_wrapper'}
                type="text"
                value={story}
                onChange={(event) => setStory(event.target.value)}
                id="outlined-basic"
                label="Enter Story"
                variant="outlined"
                size="medium"
                multiline={true}
                rows={20}
                InputLabelProps={{style: {color: '#555555FF'}}}
                InputProps={{
                    style: {color: '#555555FF', borderRadius: 20, width: 'auto'},
                }}
        />
        <br/>
            <div align={'center'} className={'buttongroup_wrapper'}>
            <div>
                <Button className={'preview_button'} onClick={() => console.log(story)}>
                    Preview
                </Button>
            </div>
                <div>
                    {!uploading ? (
                        <Button className={'submit_button'} onClick={uploadStory}>
                            Submit and Upload
                        </Button>
                    ) : (
                        <CircularProgress/>
                    )}
            </div>
        </div>
            {success.success||success.message ? <SnackbarAlert message={success.message} open={true} onClose={handleCloseSnackbar}
                                                               severity={success.success ? 'success' : 'error'}/> : null}
        </Box>
    );
}

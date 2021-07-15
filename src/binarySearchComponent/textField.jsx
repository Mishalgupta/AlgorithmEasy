import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
const TextFields = () => {
    state = {
        error: false
    }
    return (
        <div>
            <TextField
                error={this.state.error}
                id="standard-error-helper-text"
                label="Upper Number"
                type="number"
                variant="outlined"
            />

        </div>
    );

}

export default TextFields;
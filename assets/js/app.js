require('../css/app.scss');

import React from "react";
import ReactDOM from "react-dom";

import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';

ReactDOM.render(
    <div>
        <header>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Holiday
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    </div>,
    document.getElementById("app")
);
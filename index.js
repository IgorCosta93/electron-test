const electron = require("electron");
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

let indeWindow;

//Listen for app to be ready;
app.on('ready', function(){
    indeWindow = new BrowserWindow({});
    //Load html into window
    indeWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: 'file',
        slashes: true
    }));
});
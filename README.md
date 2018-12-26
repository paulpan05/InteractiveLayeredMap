# Interactive Layered Map

This is a layered map website to be incorporated into an app using webview.

It can also serve as a dedicated site on its own.

Author: Paul Pan

## Getting Started

These steps will let you access this barebone website on its own.

### Setting up API keys

My personal API keys are deliberately omitted from this repository due to safety reasons. However, you must have your specific API keys if you want to get the maps working.

To set up your API keys for the project you must first create the ```config.js``` file in the same directory as the main project.

After creating the file, place the following code in file

```
var config = {
    googleKey: 'YOUR_KEY_HERE',
    mapboxKey: 'YOUR_KEY_HERE',
    thunderforestKey: 'YOUR_KEY_HERE',
    waqiKey: 'YOUR_KEY_HERE'
}
```

and replace YOUR_KEY_HERE with the keys obtained by you for Google Maps Javascript API, Mapbox API, Thunderforest API, and the API from Beijing AQI.

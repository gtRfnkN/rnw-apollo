This repository was created using the default setup commands to reproduce an issue with `fetch()` in combination with `apollo/client` in React Native Windows. There is nothing else here, sorry.

## run the windows app project

1. `yarn install` and then `yarn windows`
2. first launch should work fine, reloading the app will throw errors when trying to fetch or load apollo
3. enabling "remote js debugging" will make the app work again

## run the file upload server

1. to use the file upload feature, you need to run the upload server
2. `cd apollo-server` and then `yarn install` and `yarn start`
3. launch the windows app, click "load apollo component", and click "pick and upload file"
4. the file should be uploaded to the server and the app should display the response

This repository was created using the default setup commands to reproduce an issue with `fetch()` in combination with `apollo/client` in React Native Windows. There is nothing else here, sorry.

## run the windows app project

1. `yarn install` and then `yarn windows`
2. first launch should work fine, reloading the app will throw errors when trying to fetch or load apollo
3. enabling "remote js debugging" will make the app work again

## run the Expressjs file upload server

1. to use the simple file upload feature, you need to run the expressjs upload server
2. `cd simple-server` and then `yarn install` and `yarn dev`
3. launch the windows app, click "pick and upload file", and select one or more files
4. the file(s) should be uploaded to the server and the app should display the response
5. to verify that the server works, you can also upload a file via `localhost:8080`

## run the Apollo file upload server

1. to use the apollo file upload feature, you need to run the apollo upload server
2. `cd apollo-server` and then `yarn install` and `yarn dev`
3. launch the windows app, click "load apollo component", and click "pick and upload file"
4. the file should be uploaded to the server and the app should display the response

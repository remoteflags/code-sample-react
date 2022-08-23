![alt text](https://s3.eu-west-1.amazonaws.com/www.remoteflags.com/Header.png)
# Getting Started with Remote Flags

This package contains a code example on how to integrate with Remote Flags api and fetch a specific feature flag status.

You will find the render code in ```DemoComponent.js```, where an On/Off flag is used. In this example the flag status is used to display a marketing event for a 25% off Sale image.

## Run 

In the project directory, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# How to use
## Step 1 - Gather data
Visit [Remote Flags](remoteflags.com) and get the information for the flag you want:

1. **FlagId** - Get by selecting the flag at [remoteflags.com/flags](www.remoteflags.com/flags)
2. **OwnerId** - Get at [remoteflags.com/account](www.remoteflags.com/account)
3. **Access Token** - Get at [remoteflags.com/account](www.remoteflags.com/account)

## Step 2 - Setup
Edit the example with your owner, flag and token. This information is present on the flag page in the Remote Flags dashboard.

In ```./remote-flags-client.js``` edit sdk call to include your token.
```
apiClient.authentications['RemoteFlagsAuthorizer'].apiKey = "<YOUR_TOKEN>";
```

In ```DemoComponent.js``` edit the flag parameters.
```
{
    owner: '<YOUR_OWNER_ID>',
    flag: '<YOUR_FLAG_ID>'
}
```

## Step 3 - run
Run the project and see the image change based on flag status.

1. Run - ```npm start```
2. Visit - http://localhost:3000


## Further configuration
Additionally, set optional parameters segment and key
```
const opts = {
    // Required for multi-segment flags. For single segment flag skip this (default is 'status').
    'segment': "status", 
    // A key identifier to query remoteflags. This is used on overrides and consistent flags.
    'key': "someIdentifier" 
};
```

**Note**: If you don't want to include segment or key in your query simply leave opts as empty:
```
const opts = {};
```

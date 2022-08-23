import { ApiClient, PublicApi } from 'remoteflags-nodejs-client';

// Remote Flags client setup
const ownerId = "<YOUR_OWNER_ID>";
const accessToken = "<YOUR_TOKEN>";
const apiClient = new ApiClient();
apiClient.authentications['RemoteFlagsAuthorizer'].apiKey = accessToken;
const api = new PublicApi(apiClient)

export const getStatus = (params, done, err) => {
  const opts = {
    segment: params.segment || 'status',
    key: params.key || '',
  };

  api.getStatus(ownerId, params.flag, opts).then(
    (response) => {
      done(response);
    },
    (error) => {
      err(error);
    }
  );
};

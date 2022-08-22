import { ApiClient, PublicApi } from 'remoteflags-nodejs-client';

// Remote Flags client setup
let apiClient = new ApiClient();
apiClient.authentications['RemoteFlagsAuthorizer'].apiKey = "<YOUR_TOKEN>";
const api = new PublicApi(apiClient)

export const getStatus = (params, done, err) => {
  const opts = {
    segment: params.segment || 'status',
    key: params.key || '',
  };

  api.getStatus(params.owner, params.flag, opts).then(
    (response) => {
      done(response);
    },
    (error) => {
      err(error);
    }
  );
};

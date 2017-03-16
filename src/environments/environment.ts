// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  authorisation: false,
  endpoints: {
    HOST: 'http://localhost:8080',
    STEAK_BASE_URI: '/v0.2',
    AUTH_BASE_URI: '/auth'
  },
  DEFAULT_HEADERS: {
    'Content-Type': "application/json",
    'x-auth-username': 'bts'
  }
};

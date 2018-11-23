// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  appName: 'Chapp buscador de habitaciones simple',
  production: false,
  apiURL: 'http://127.0.0.1:8000/api',
  loginCheck: 'http://127.0.0.1:8000/login_check',
  signUp: 'http://127.0.0.1:8000/register',
  appIds: {
    appId: '1_v2nyee3gv6swowsokocoock8wcwckscw4so8so8ss0o0c8kso'// api key para identificar al cliente en el back
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

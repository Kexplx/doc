// globals.d.ts (".d" ist wichtig!)
// do not prefix with "export"!

declare const myGlobalVar: string;


// Now the variable can be used anywhere in the app
// just like other global variables like: console, window, ...




// Extent "window" global with a new property
// electron


// We extend the global window object's type
// with the API exposed to us by the preloader.

export interface ElectronApi {
  loadPreferences: () => Promise<void>;
}

declare global {
  interface Window {
    electronApi: ElectronApi;
  }
}

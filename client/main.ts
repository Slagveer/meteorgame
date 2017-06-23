import "angular2-meteor-polyfills";
import * as PIXI from 'pixi';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./imports/app";

enableProdMode();

Meteor.startup(() => {
   platformBrowserDynamic().bootstrapModule(AppModule);
});

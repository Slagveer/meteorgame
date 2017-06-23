import * as PIXI from 'pixi';
import { Observable } from "rxjs";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Demo } from "../../../../both/models/demo.model";
import template from "./game.component.html";
import {Element} from "@angular/compiler/src/ml_parser/ast";

@Component({
    selector: 'game',
    template
})
export class GameComponent implements OnInit {
    stage: PIXI;
    data: Observable<Demo[]>;

    constructor() {
        this.stage = new PIXI.Container();
    }

    ngOnInit() {

    }
}
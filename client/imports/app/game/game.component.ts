import * as PIXI from 'pixi';
import { Observable } from "rxjs";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {ElementRef, enableProdMode, Input, Output} from "@angular/core";
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
    renderer: PIXI.renderer;
    //@element: Observable<Element>;
    @Input() element:Observable<HTMLElement>;

    constructor() {
        this.stage = new PIXI.Container();
        this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
                transparent: true
            }, false );
    }

    ngOnInit() {
        (this.element as any).appendChild(this.renderer.view); console.log(this.element)
    }
}
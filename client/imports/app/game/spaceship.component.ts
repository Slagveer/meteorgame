import * as PIXI from 'pixi';
import { Observable } from "rxjs";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {ElementRef, enableProdMode, Input, Output} from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Demo } from "../../../../both/models/demo.model";
import template from "./game.component.html";
import {Element} from "@angular/compiler/src/ml_parser/ast";

@Component({
    selector: 'spaceShip',
    template
})

export class SpaceShip{
    _game: PIXI;
    _body: PIXI;

    constructor( game, x, y ) {
        this._game = game;
        this._body = PIXI.Sprite.fromImage( '/img/spaceship-body.png' );
        this._body.position.x = x;
        this._body.position.y = y;
        this._body.anchor.x = 0.5;
        this._body.anchor.y = 0.5;
        this._game.stage.addChild( this._body );
    }
}

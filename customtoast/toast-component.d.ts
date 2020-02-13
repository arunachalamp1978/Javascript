import { AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { Config } from '../../../node_modules/ionic-angular/config/config';
import { NavParams } from '../../../node_modules/ionic-angular/navigation/nav-params';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';
/**
 * @hidden
 */
export declare class ToastCmp implements AfterViewInit {
    _viewCtrl: ViewController;
    _config: Config;
    _elementRef: ElementRef;
    d: {
        message?: string;
        cssClass?: string;
        duration?: number;
        showCloseButton?: boolean;
        closeButtonText?: string;
        showOpenButton?: boolean;
        openButtonText?: string;
        dismissOnPageChange?: boolean;
        position?: string;
    };
    descId: string;
    dismissTimeout: number;
    enabled: boolean;
    hdrId: string;
    id: number;
    constructor(_viewCtrl: ViewController, _config: Config, _elementRef: ElementRef, params: NavParams, renderer: Renderer);
    ngAfterViewInit(): void;
    ionViewDidEnter(): void;
    cbClick(): void;
    dismiss(role: string): Promise<any>;
}

import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WebSocketTunnel } from '@illgrenoble/guacamole-common-js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as FileSaver from 'file-saver';

import { RemoteDesktopManager } from '../services';
import { ClipboardModalComponent } from './components';

import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['../themes/default.scss', './app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
    private manager: RemoteDesktopManager;

    constructor(private ngbModal: NgbModal,
        private snackBar: MatSnackBar,
        private cookieService: CookieService) {

    }

    // handleScreenshot(): void {
    //     this.manager.createScreenshot(blob => {
    //         if (blob) {
    //             FileSaver.saveAs(blob, `screenshot.png`);
    //         }
    //     });
    // }
    //
    // createModal(classRef) {
    //     this.manager.setFocused(false);
    //     const modal = this.ngbModal.open(classRef, {
    //         size: 'lg',
    //         windowClass: 'modal-xxl',
    //         container: '.ngx-remote-desktop',
    //         keyboard: false
    //     });
    //     modal.componentInstance.manager = this.manager;
    //     return modal;
    // }
    //
    // handleDisconnect(): void {
    //     this.manager.getClient().disconnect();
    // }
    //
    // handleEnterFullScreen() {
    //     this.manager.setFullScreen(true);
    // }
    //
    // handleExitFullScreen() {
    //     this.manager.setFullScreen(false);
    // }
    //
    // handleClipboard(): void {
    //     const modal = this.createModal(ClipboardModalComponent);
    //     modal.result.then((text) => {
    //         this.manager.setFocused(true);
    //         if (text) {
    //             this.manager.sendRemoteClipboardData(text);
    //             this.snackBar.open('Sent to remote clipboard', 'OK', {
    //                 duration: 2000,
    //             });
    //         }
    //     }, () => this.manager.setFocused(true));
    // }
    //
    // handleConnect() {
    //     const parameters = {
    //         hostname: '192.168.13.232',
    //         port: 3389,
    //         image: 'image/png',
    //         audio: 'audio/L16',
    //         dpi: 96,
    //         width: window.screen.width,
    //         height: window.screen.height,
    //         token: this.cookieService.get('esrf-token')
    //     };
    //     /*
    //      * The manager will establish a connection to:
    //      * ws://localhost:8080?ws?ip={address}&image=image/png&audio=audio/L16&dpi=96&width=n&height=n
    //      */
    //     this.manager.connect(parameters);
    // }
    //
    ngOnInit() {
    //     // Setup tunnel. The tunnel can be either: WebsocketTunnel, HTTPTunnel or ChainedTunnel
    //     const tunnel = new WebSocketTunnel('ws://localhost:8080/aidan/ws');
    //     /**
    //      *  Create an instance of the remote desktop manager by
    //      *  passing in the tunnel
    //      */
    //     this.manager = new RemoteDesktopManager(tunnel);
    //     this.handleConnect();
    //     this.manager.onRemoteClipboardData.subscribe(text => {
    //         const snackbar = this.snackBar.open('Received from remote clipboard', 'OPEN CLIPBOARD', {
    //             duration: 1500,
    //         });
    //         snackbar.onAction().subscribe(() => this.handleClipboard());
    //     });
    //     this.manager.onReconnect.subscribe(reconnect => this.handleConnect());
    //
    //     console.log('ESRF-token ' + this.cookieService.get('esrf-token'));
    //
    }
}
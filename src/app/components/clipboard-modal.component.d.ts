import { OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RemoteDesktopManager } from '../../services';
export declare class ClipboardModalComponent implements OnInit {
    activeModal: NgbActiveModal;
    manager: RemoteDesktopManager;
    private text;
    private clipboardData;
    private clipboardSubscription;
    constructor(activeModal: NgbActiveModal);
    ngOnInit(): void;
    close(): void;
    submit(): void;
}

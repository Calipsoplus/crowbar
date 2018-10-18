import {Component, Inject, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-jupyterhub',
  templateUrl: './jupyterhub.component.html',
  styleUrls: ['./jupyterhub.component.css']
})
export class JupyterhubComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    // TODO: Brief introduction to Jupyter and provide link which opens JupyterHub in new tab
    window.open(environment.JUPYTERHUB_URL);
  }

}

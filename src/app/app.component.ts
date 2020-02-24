import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { IAppState } from '@states/app.state';
import { GetConfig } from '@actions/config.actions';
import { selectConfig } from '@selectors/config.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-angular';

  config$ = this.store.pipe(select(selectConfig));

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetConfig());
  }
}

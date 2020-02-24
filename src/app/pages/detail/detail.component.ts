import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '@states/app.state';
import { selectSelectedUser } from '@selectors/user.selector';
import { GetUser } from '@actions/user.actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  user = this.store.pipe(select(selectSelectedUser));

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetUser(this.route.snapshot.params.id));
  }

}

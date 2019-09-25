import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routedComponents, HeroRoutingModule } from './hero-routing.module';

@NgModule({
  imports:      [ SharedModule, HeroRoutingModule ],
  declarations: [ routedComponents ]
})
export class HeroModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
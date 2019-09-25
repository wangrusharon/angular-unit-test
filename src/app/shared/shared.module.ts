import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { TitleCasePipe }      from './title-case.pipe';

@NgModule({
  imports: [ CommonModule ],
  exports: [
    CommonModule,
    // SharedModule importers won't have to import FormsModule too
    FormsModule,
    HighlightDirective,
    TitleCasePipe
  ],
  declarations: [ HighlightDirective, TitleCasePipe ]
})
export class SharedModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
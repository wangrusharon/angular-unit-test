export interface Hero {
  id: number;
  name: string;
}

// SystemJS bug:
// TS file must export something real in JS, not just interfaces
export const _dummy = undefined;


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
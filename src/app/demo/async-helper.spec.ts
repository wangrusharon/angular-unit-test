// tslint:disable-next-line:no-unused-variable
import { async, fakeAsync, tick } from '@angular/core/testing';

import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

describe('Angular async helper', () => {
  let actuallyDone = false;

  beforeEach(() => { actuallyDone = false; });

  afterEach(() => { expect(actuallyDone).toBe(true, 'actuallyDone should be true'); });

  it('should run normal test', () => { actuallyDone = true; });

  it('should run normal async test', (done: DoneFn) => {
    setTimeout(() => {
      actuallyDone = true;
      done();
    }, 0);
  });

  it('should run async test with task',
      async(() => { setTimeout(() => { actuallyDone = true; }, 0); }));

  it('should run async test with successful promise', async(() => {
    const p = new Promise(resolve => { setTimeout(resolve, 10); });
    p.then(() => { actuallyDone = true; });
  }));

  it('should run async test with failed promise', async(() => {
    const p = new Promise((resolve, reject) => { setTimeout(reject, 10); });
    p.catch(() => { actuallyDone = true; });
  }));

  // Use done. Cannot use setInterval with async or fakeAsync
  // See https://github.com/angular/angular/issues/10127
  it('should run async test with successful delayed Observable', (done: DoneFn) => {
    const source = of(true).pipe(delay(10));
    source.subscribe(
      val => actuallyDone = true,
      err => fail(err),
      done
    );
  });

  // Cannot use setInterval from within an async zone test
  // See https://github.com/angular/angular/issues/10127
  // xit('should run async test with successful delayed Observable', async(() => {
  // const source = of(true).pipe(delay(10));
  //   source.subscribe(
  //     val => actuallyDone = true,
  //     err => fail(err)
  //   );
  // }));

  // // Fail message: Error: 1 periodic timer(s) still in the queue
  // // See https://github.com/angular/angular/issues/10127
  // xit('should run async test with successful delayed Observable', fakeAsync(() => {
  // const source = of(true).pipe(delay(10));
  //   source.subscribe(
  //     val => actuallyDone = true,
  //     err => fail(err)
  //   );

  //   tick();
  // }));

});


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
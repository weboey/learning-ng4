import PerfectScrollbar from 'perfect-scrollbar';

import { Directive,
  OnInit, DoCheck, OnChanges, OnDestroy, Input, Output,AfterViewChecked,
  EventEmitter, HostListener, NgZone, ElementRef, Optional, Inject,
  SimpleChanges, KeyValueDiffer, KeyValueDiffers } from '@angular/core';


@Directive({
  selector: '[perfectScrollbar]',
  exportAs: 'ngxPerfectScrollbar'
})
export class PerfectScrollbarDirective implements OnInit, OnDestroy, DoCheck, OnChanges,AfterViewChecked {

  private instance: any;

  private timeout: number;

  constructor(private zone: NgZone, public elementRef: ElementRef
              ) {}

  ngOnInit() {
    //const config = new PerfectScrollbarConfig(this.defaults);
    //config.assign(this.config); // Custom configuration
    this.zone.runOutsideAngular(() => {
      this.instance = new PerfectScrollbar(this.elementRef.nativeElement, {});
    });

  }

  ngOnDestroy() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }

    if (this.instance) {
      this.zone.runOutsideAngular(() => {
        this.instance.destroy();
      });
      this.instance = null;
    }
  }

  ngDoCheck() {
    console.log("ngDoCheck!!!");
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngAfterViewChecked():void {
    console.log("ngAfterViewChecked!!!");

    this.zone.runOutsideAngular(() => {
      this.update();
    });
  }

  public ps() {
    return this.instance;
  }

  public update() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }

    this.timeout = window.setTimeout(() => {
      try {
        this.zone.runOutsideAngular(() => {
          this.instance.update();
        });
      } catch (error) {
        // Update can be finished after destroy so catch errors
      }
    }, 0);
  }

}

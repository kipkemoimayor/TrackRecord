import { Directive,ElementRef,HostListener } from '@angular/core';
import { Goal } from './goal';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {
  // this.elem.nativeElement.style.textDecoration="line-through";
}

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }
  @HostListener("dblclick") onDoubleClick(){
    this.textDeco("none");
  }

}

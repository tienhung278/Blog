import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlightsearch'
})
export class HighlightsearchPipe implements PipeTransform {
  
  constructor(private sanitizer: DomSanitizer) {
    
  }

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }

    const regex = new RegExp(args, 'gi');
    const match = value.match(regex);

    if (!match) {
      return value;
    }

    let result = value.replace(regex, `<mark>${match[0]}</mark>`);
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

}

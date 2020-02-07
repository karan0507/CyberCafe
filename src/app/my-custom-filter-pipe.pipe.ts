import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomFilterPipe'
})
export class MyCustomFilterPipePipe implements PipeTransform {

  transform(data: any, toFilter: string): any {
    if (!toFilter) { return data; }
    return data.filter(d => d.value === toFilter);
  }

}

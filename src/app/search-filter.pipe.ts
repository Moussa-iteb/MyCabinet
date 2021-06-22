import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(dataList: any, input: string): any  {
    if (input) {
      input = input.toLowerCase();
      return dataList.filter(function (product: any) {
        return product.NOM_P.toLowerCase().indexOf(input) > -1;
      });
    }
    return dataList;
  }

}

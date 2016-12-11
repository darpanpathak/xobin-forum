import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tags' })
export class TagsPipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value) return value;

        return value.replace(/\w\S*/g, function (txt) {
            var btnarr = [];
            var regex = new RegExp('<', 'g');
            var valarr = txt.replace(regex, '').split('>');
            for (var i = 0; i < valarr.length - 1; i++) {
                btnarr.push("<a class='btn btn-info'>" + valarr[i].replace('<', '') + "</a>");
            }

            var finalstring = btnarr.join('');
            return finalstring;
        })

    }
}
import {Pipe} from "@angular/core";

@Pipe({
    name: 'ota'
})
export class ObjectToArrayPipe {
    /*
     Takes a value and makes it lowercase.
     */
    transform(object: any, args?: any[]): any[] {
        console.log(object);

        let values: any[] = [];
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                values.push(object[key]);
            }
        }
        console.log(values.length);
        return values;
    }
}

import {Injectable} from "@angular/core";
import {Order} from "../shared/model/Order";
import * as jsPDF from 'jspdf';

@Injectable()
export class PrintService {

    constructor() {
    }

    public printListOfOrdersForKitchen(orders: Order[]) {
        let doc = new jsPDF();
        doc.text("Hello", 20, 20);
        doc.save('table.pdf');
    }

}

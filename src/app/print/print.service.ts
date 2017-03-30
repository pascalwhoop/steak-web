import {Injectable} from "@angular/core";
import {Order} from "../shared/model/Order";
import * as jsPDF from "jspdf";
import {offerCountMapFromOrders, makeDaySubtitle, toApiDate} from "../core/util/util.service";
import {MdSnackBar} from "@angular/material";

@Injectable()
export class PrintService {

    LEFT_MARGIN = 20;
    TOP_MARGIN = 20;
    LINE_HEIGHT = 10;

    constructor(public snackBar: MdSnackBar) {
    }

    public printListOfOrdersForKitchen(date: Date, orders: Order[]) {
        let ordersMap = offerCountMapFromOrders(orders);
        let doc = this.getFreshPdf();
        let yOffset = this.TOP_MARGIN;
        if (orders.length == 0) {
            this.notifyNoOrders(date);
            return;
        }
        yOffset = this.addHeader(doc, "Orders for: " + makeDaySubtitle(orders[0].offer.date), this.TOP_MARGIN);
        this.addLines(doc, this.getLinesFromOffersMap(ordersMap), yOffset, this.LINE_HEIGHT);
        doc.save('orders' + toApiDate(orders[0].offer.date) + '.pdf');
        this.notifyPdfCreated(date);
    }

    /**
     * applies the lines to the doc with the specified yOffset and lineHeight. Returns the new yOffset
     * @param doc
     * @param lines
     * @param yOffset
     * @param lineHeight
     * @param fontSize
     */
    private addLines(doc: jsPDF, lines: string[], yOffset: number, lineHeight: number): number {
        let i = 0;
        lines.forEach(line => doc.text(line, this.LEFT_MARGIN, yOffset + lineHeight * i++));
        return yOffset + lineHeight * i;
    }

    private getFreshPdf(): jsPDF {
        let doc = new jsPDF();
        doc.setFontSize(12);
        //setFontStyle('italic')
        return doc;
    }

    private getLinesFromOffersMap(offersMap: Map<string, number>): string[] {
        let strings = [];
        offersMap.forEach((val, key) => {
            strings.push(key + ': ' + val);
        });
        return strings;
    }

    private addHeader(doc: jsPDF, text: string, yOffset: number): number {
        doc.setFontSize(20);
        doc.text(text, this.LEFT_MARGIN, yOffset);
        doc.setFontSize(12);
        return yOffset + 20;
    }

    private notifyNoOrders(date: Date) {
        this.snackBar.open('No orders for ' + makeDaySubtitle(date), null, {duration: 2000});
    }


    private notifyPdfCreated(date: Date) {
        this.snackBar.open('PDF generated for ' + makeDaySubtitle(date), null, {duration: 2000});
    }
}

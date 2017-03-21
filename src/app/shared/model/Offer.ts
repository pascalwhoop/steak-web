export interface Offer {

    description: string;
    _id?: string;
    price: number;
    date: Date;
    time: string;
    main_offer: boolean;
    vegetarian: boolean;
    heat: number;
}

import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: any[] = [
        {
            "productId" : 1,
            "productName" : 'Golden Cart',
            "productCode" : 'PM001',
            "price" : 2,
            "available": true,
            "rating" : 4.5,
            "imageUrl" : 'assets/images/garden_cart.png'
        },
        {
            "productId" : 2,
            "productName" : 'Hammer',
            "productCode" : 'PM002',
            "price" : 3,
            "available": false,
            "rating" : 3.5,
            "imageUrl" : 'assets/images/hammer.png'
        }
    ]
    /** this method will toggle the image listed on web page*/
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}
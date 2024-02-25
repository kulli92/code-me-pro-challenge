  export interface Package {
    packageId: number;
    totalPrice: number;
    totalWeight: number;
    courierPrice: number;
    productNames: string[];
  }
  
  export interface Order {
    orderId: number;
    orderDate: Date; 
    totalPrice: number;
    totalWeight: number;
    packages: Package[];
  }
  
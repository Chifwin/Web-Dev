export class Product {
  static count = 0;
  id: number;
  name: string;
  rating: number;
  description: string;
  image: string;
  kaspi: string;
  price: number;

  constructor(name: string, description: string, rating: number, link_img: string, link_kaspi: string) {
    this.id = ++Product.count;
    this.name = name;
    this.rating = rating;
    this.description = description;
    this.image = link_img;
    this.kaspi = link_kaspi;
    this.price = 0;
  }
}

export const products = [
  new Product("Palit GeForce RTX 3060 Dual NE63060019K9-190AD 12GB", "Video card", 4.5, "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h56/h6a/33720828592158/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928-1-Container.jpg", "https://kaspi.kz/shop/p/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928/?c=631010000"),
  new Product("GIGABYTE GeForce RTX 3060 GAMING OC 12G rev. 2.0 12 ГБ", "Video card", 5, "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h34/hd9/34231392534558/gigabyte-geforce-rtx-3060-gaming-oc-12g-rev-2-0-gv-n3060gaming-oc-12gd-12gb-101717712-1-Container.jpg", "https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-gaming-oc-12g-rev-2-0-12-gb-101717712/?c=631010000"),
  new Product("Palit GeForce RTX 3070 Ti GamingPro 8 ГБ", "Video card", 4.9, "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h47/he7/34097901699102/palit-geforce-rtx-3070-ti-gamingpro-ned307t019p2-1046a-8gb-101648509-1-Container.jpg", "https://kaspi.kz/shop/p/palit-geforce-rtx-3070-ti-gamingpro-8-gb-101648509/?c=631010000"),
  new Product("Intel Core i5 9600KF OEM", "Processor", 4.8, "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h22/he9/31979267620894/intel-core-i5-9600kf-oem-100042649-1-Container.jpg", "https://kaspi.kz/shop/p/intel-core-i5-9600kf-oem-100042649/?c=631010000"),
  new Product("AMD Ryzen 7 5700X OEM", "Processor", 5, "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h53/h76/52679579402270/amd-ryzen-7-ryzen-7-5700x-oem-105933955-1.jpg", "https://kaspi.kz/shop/p/amd-ryzen-7-5700x-oem-105933955/?c=631010000"),
  new Product("Intel Xeon Xeon-G 6248R OEM", "Xeon gold processor", 0, "https://resources.cdn-kaspi.kz/img/m/p/h7f/h87/64510551588894.jpg?format=preview-medium", "https://kaspi.kz/shop/p/intel-xeon-xeon-g-6248r-oem-105967584/?c=631010000"),
  new Product("Intel Xeon Silver 4316 OEM", "Xeon silver processor", 0, "https://resources.cdn-kaspi.kz/img/m/p/h65/h67/68060125921310.jpg?format=preview-medium", "https://kaspi.kz/shop/p/intel-xeon-silver-4316-oem-108519164/?c=631010000"),
  new Product("ASUS ROG MAXIMUS Z790 APEX", "Silver motherboard", 0, "https://resources.cdn-kaspi.kz/img/m/p/h80/hd5/67520415727646.jpg?format=preview-medium", "https://kaspi.kz/shop/p/asus-rog-maximus-z790-apex-108307592/?c=631010000"),
  new Product("MSI MPG Z690 CARBON EK X", "Luminous motherboard", 0, "https://resources.cdn-kaspi.kz/img/m/p/hcd/hdf/64534662971422.jpg?format=preview-medium", "https://kaspi.kz/shop/p/msi-mpg-z690-carbon-ek-x-105572708/?c=631010000"),
  new Product("ASUS ROG MAXIMUS Z690 HERO EVA", "Strange motherboard", 0, "https://resources.cdn-kaspi.kz/img/m/p/h22/h92/64482468233246.jpg?format=preview-medium", "https://kaspi.kz/shop/p/asus-rog-maximus-z690-hero-eva-106365854/?c=631010000"),
];
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
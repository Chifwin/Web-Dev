export class Product {
  static count = 0;
  id: number;
  name: string;
  rating: number;
  description: string;
  image: string;
  kaspi: string;
  price: number;
  shows: boolean;
  likes: number;
  p_id: number;

  constructor(name: string, description: string, rating: number, link_img: string, link_kaspi: string, p: number) {
    this.id = ++Product.count;
    this.name = name;
    this.rating = rating;
    this.description = description;
    this.image = link_img;
    this.kaspi = link_kaspi;
    this.price = 0;
    this.shows = true;
    this.likes = 0;
    this.p_id = p;
  }
}

export const products = [
  new Product("Palit GeForce RTX 3060 Dual NE63060019K9-190AD 12GB", "Video card", 4.5, "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h56/h6a/33720828592158/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928-1-Container.jpg", "https://kaspi.kz/shop/p/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928/?c=631010000", 1),
  new Product("GIGABYTE GeForce RTX 3060 GAMING OC 12G rev. 2.0 12 ГБ", "Video card", 5, "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h34/hd9/34231392534558/gigabyte-geforce-rtx-3060-gaming-oc-12g-rev-2-0-gv-n3060gaming-oc-12gd-12gb-101717712-1-Container.jpg", "https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-gaming-oc-12g-rev-2-0-12-gb-101717712/?c=631010000", 1),
  new Product("Palit GeForce RTX 3070 Ti GamingPro 8 ГБ", "Video card", 4.9, "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h47/he7/34097901699102/palit-geforce-rtx-3070-ti-gamingpro-ned307t019p2-1046a-8gb-101648509-1-Container.jpg", "https://kaspi.kz/shop/p/palit-geforce-rtx-3070-ti-gamingpro-8-gb-101648509/?c=631010000", 1),
  new Product("Palit GeForce RTX 3090 Ti GameRock NED309T019SB-1022G 24 ГБ", "Video card", 5, "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0c/had/50703266381854/palit-geforce-rtx-3090-ti-gamerock-ned309t019sb-1022g-24-gb-104833064-1.jpg", "https://kaspi.kz/shop/p/palit-geforce-rtx-3090-ti-gamerock-ned309t019sb-1022g-24-gb-104833064/?c=631010000#!/item", 1),
  new Product("PNY RTX 3090 24GB XLR8 Gaming REVEL EPIC-X RGB Triple Fan Edition VCG309024TFXPPB 24 ГБ", "Video card", 0, "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h61/52213910765598/pny-rtx-3090-24gb-xlr8-gaming-revel-epic-x-rgb-triple-fan-edition-vcg309024tfxppb-24-gb-105667790-1.jpg", "https://kaspi.kz/shop/p/pny-rtx-3090-24gb-xlr8-gaming-revel-epic-x-rgb-triple-fan-edition-vcg309024tfxppb-24-gb-105667790/?c=631010000#!/item", 1),

  new Product("Intel Core i5 9600KF OEM", "Processor", 4.8, "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h22/he9/31979267620894/intel-core-i5-9600kf-oem-100042649-1-Container.jpg", "https://kaspi.kz/shop/p/intel-core-i5-9600kf-oem-100042649/?c=631010000", 2),
  new Product("AMD Ryzen 7 5700X OEM", "Processor", 5, "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h53/h76/52679579402270/amd-ryzen-7-ryzen-7-5700x-oem-105933955-1.jpg", "https://kaspi.kz/shop/p/amd-ryzen-7-5700x-oem-105933955/?c=631010000", 2),
  new Product("Intel Xeon Xeon-G 6248R OEM", "Xeon gold processor", 0, "https://resources.cdn-kaspi.kz/img/m/p/h7f/h87/64510551588894.jpg?format=preview-medium", "https://kaspi.kz/shop/p/intel-xeon-xeon-g-6248r-oem-105967584/?c=631010000", 2),
  new Product("Intel Xeon Silver 4316 OEM", "Xeon silver processor", 0, "https://resources.cdn-kaspi.kz/img/m/p/h65/h67/68060125921310.jpg?format=preview-medium", "https://kaspi.kz/shop/p/intel-xeon-silver-4316-oem-108519164/?c=631010000", 2),
  new Product("AMD Ryzen 9 7950X OEM", "Processor", 0, "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h84/66198073344030/amd-ryzen-9-7950x-box-107747548-1.jpg", "https://kaspi.kz/shop/p/amd-ryzen-9-7950x-oem-107747548/?c=631010000#!/item", 2),

  new Product("ASUS ROG MAXIMUS Z690 HERO EVA", "EVANGELIOOOOOON", 100500, "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h16/62286590312478/asus-rog-maximus-z690-hero-eva-106365854-1.jpg", "https://kaspi.kz/shop/p/asus-rog-maximus-z690-hero-eva-106365854/?c=631010000#!/item", 3),
  new Product("ASUS ROG MAXIMUS Z790 APEX", "Silver motherboard", 0, "https://resources.cdn-kaspi.kz/img/m/p/h80/hd5/67520415727646.jpg?format=preview-medium", "https://kaspi.kz/shop/p/asus-rog-maximus-z790-apex-108307592/?c=631010000", 3),
  new Product("MSI MPG Z690 CARBON EK X", "Luminous motherboard", 0, "https://resources.cdn-kaspi.kz/img/m/p/hcd/hdf/64534662971422.jpg?format=preview-medium", "https://kaspi.kz/shop/p/msi-mpg-z690-carbon-ek-x-105572708/?c=631010000", 3),
  new Product("ASUS ROG MAXIMUS Z690 HERO EVA", "Strange motherboard", 0, "https://resources.cdn-kaspi.kz/img/m/p/h22/h92/64482468233246.jpg?format=preview-medium", "https://kaspi.kz/shop/p/asus-rog-maximus-z690-hero-eva-106365854/?c=631010000", 3),
  new Product("MSI MEG Z590 ACE GOLD EDITION", "Lion motherboard", 0, "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h1b/49075476037662/materinskaa-plata-msi-meg-z590-ace-gold-edition-103934735-1.jpg", "https://kaspi.kz/shop/p/msi-meg-z590-ace-gold-edition-103934735/?c=631010000#!/item", 3),

  new Product("ASUS ROG Strix Helios GX601 Eva Edition 90DC0020-B39020", "EVANGELIOOOOOON", 100500, "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h10/ha5/62589140697118/korpus-asus-rog-strix-helios-eva-edition-gx601-atx-micro-atx-mini-itx-eatx-usb-3-1-3x120mm-aura-sync-106509562-1.jpg", "https://kaspi.kz/shop/p/asus-rog-strix-helios-gx601-eva-edition-90dc0020-b39020-chernyi-106509562/?c=631010000#!/item", 4),
  new Product("Antec Torque ATX midi tower black", "Helmet frame", 0, "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h8f/46516254670878/antec-torque-atx-midi-tower-cernyj-102564475-1.jpg", "https://kaspi.kz/shop/p/antec-torque-atx-midi-tower-chernyi-102564475/?c=631010000#!/item", 4),
  new Product("LIAN LI ODYSSEY X G99.TR01A.00", "Silver frame", 0, "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h2b/62065879089182/lian-li-odyssey-x-g99-tr01a-00-serebristyj-106241423-1.jpg", "https://kaspi.kz/shop/p/lian-li-odyssey-x-g99-tr01a-00-serebristyi-106241423/?c=631010000#!/item", 4),
  new Product("Yuhul Rhinoceros 138168", "Orange helmet", 0, "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/h70/68197590106142/korpus-yuhul-rhinoceros-108568354-1.jpg", "https://kaspi.kz/shop/p/yuhul-rhinoceros-138168-oranzhevyi-108568354/?c=631010000#!/item", 4),
  new Product("ASUS TUF Gaming GT501", "Frame", 0, "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf9/hcb/31896389648414/asus-tuf-gaming-gt501-black-9800428-1-Container.jpg", "https://kaspi.kz/shop/p/asus-tuf-gaming-gt501-chernyi-9800428/?c=631010000#!/item", 4)
];

import {v4 as uuidv4} from 'uuid'

const itemsList: {
    id: string, 
    title: string, 
    subtitle: string, 
    price:number, 
    imgUrl: string}[] = 
    
    [
        {
 id: uuidv4(),
 title: 'Nauji batai',
 subtitle: 'Nei karto nedeveti nike sportbaciai',
 price: 50,
 imgUrl:"https://assets.adidas.com/images/w_600,f_auto,q_auto/8df5ab4346d7475ebb08a91500a047d3_9366/Continental_80_Shoes_White_G27706_01_standard.jpg"
},
{
    id: uuidv4(),
title:'Melynas megztinis',
subtitle: 'Dangaus melsvumo moteriskas megztinis',
price: 10,
imgUrl: "https://www.cptech.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/moncler_blue_sweater-738wvz.jpg",
},
{
    id: uuidv4(),
    title:'Grazi kepure',
    subtitle:'Zvejybai tinkanti adidas kepure',
    price:20,
    imgUrl:'https://assets.adidas.com/images/w_600,f_auto,q_auto/9a282601ad0b4856bae4aaaa014761f8_9366/UV_Sun_Hat_White_FI3032_01_standard.jpg'
},
{
    id: uuidv4(),
    title:'Knyga',
    subtitle:'Neskaityta, apdulkejusi knyga',
    price:40,
    imgUrl:'https://toy-content.imgix.net/product/lego-21315-pop-up-book-3~1546212909.jpg?w=710&h=710&fit=fill&fm=jpg&bg=0FFF&s=f4936e3b6642de5caf3bd3c4d8396a05'
},
{
    id: uuidv4(),
    title:'Juoda kede',
    subtitle:'Patogi juoda kede, tinka vaikams ir suaugusiems',
    price:20,
    imgUrl:'https://www.ikea.com/gb/en/images/products/stefan-chair-brown-black__0727320_PE735593_S5.JPG?f=s'
},
{
    id: uuidv4(),
    title:'Vandens buteliukas',
    subtitle:'Pusiau pilnas 0.5l plastikinis buteliukas',
    price:7,
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFq8qKD-bIf3Eto8rC2JYPmyFQRdMN2dJd7Q&usqp=CAU'
},
{
    id: uuidv4(),
    title:'Teleskopas',
    subtitle:'Telescope firmos teleskopas',
    price:75,
    imgUrl:'https://www.toysrus.co.za/media/catalog/product/cache/924d35e0c420b57e9fc2103a1522e700/3/4/3491953499145_imageoutofpack.jpg'
},
{
    id: uuidv4(),
    title:'Pinigine',
    subtitle:'Nauja odine pinigine',
    price:25,
    imgUrl:'https://www.pierotucci.com/storage/products/1204_1.jpg'
},
{
    id: uuidv4(),
    title:'Ausines',
    subtitle:'Juodos geros ausines, garsiai groja',
    price:15,
    imgUrl:'https://www.jamaudio.com/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/h/x/hx-hp101_hero.jpg'
},
{
    id: uuidv4(),
    title:'Televizorius',
    subtitle:'53cm istrizaines Tv. be dokumentu',
    price:99,
    imgUrl:'https://www.powerplanetonline.com/cdnassets/xiaomi_mi_tv_4a_v52r_32_hd_smart_tv_android_os_led_01_l.jpg'
},
{
    id: uuidv4(),
    title:'Puzle',
    subtitle:'Pradeta delioti 1000 daliu puzle, galima sutart, kad neardyciau',
    price:13,
    imgUrl:'https://media1.popsugar-assets.com/files/thumbor/LenVet9WPX7eW_gshS3-BdqXyBQ/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/04/21/688/n/46902964/f9ce547e5e9f11f4794419.17892389_/i/friends-jigsaw-puzzle.jpg'
},
{
    id: uuidv4(),
    title:'Atsuktuvu rinkinys',
    subtitle:'Atsuktuvu rinkinys su daug galvuciu ir pora varztu, kaina derinama',
    price:23,
    imgUrl:'https://cdn.aws.toolstation.com/images/141020-UK/800/10842.jpg'
},
{
    id: uuidv4(),
    title:'Xbox 1',
    subtitle:'Geras, priziuretas xboxas, parduodu, nes perejau prie playstation',
    price:165,
    imgUrl:'https://bigbox.lt/2619608-thickbox_default/zaidimu-konsole-microsoft-xbox-one-s-1tb-white.jpg'
},
{
    id: uuidv4(),
    title:'Radijas',
    subtitle:'Fm radijas su laikrodziu, gerai groja',
    price:18,
    imgUrl:'https://www.varle.lt/static/uploads/products/596/cam/camry-cr-1153-fm-digital-radio-cr-1153.jpg'
},
{
    id: uuidv4(),
    title:'Vytis',
    subtitle:'Veliava, puikios bukles',
    price:25,
    imgUrl:'https://flagmanas.lt/1957-large_default/lietuvos-istorine-veliava-vytis.jpg'
},
{
    id: uuidv4(),
    title:'Telefonas Huawei p20',
    subtitle:'Priziuretas telefonas, visada su apsauginiu stikliuku, kaina galutine',
    price:100,
    imgUrl:'https://i2.wp.com/www.pdevice.com/wp-content/uploads/2018/03/Huawei-P20.jpg?fit=600%2C600&ssl=1'
},
{
    id: uuidv4(),
    title:'Paveikslas Bananas',
    subtitle:'Sunaus tapytas paveikslas',
    price:40,
    imgUrl:'https://images.saatchiart.com/saatchi/1219791/art/6257353/5327125-GOAVTCAA-7.jpg'
},
{
    id: uuidv4(),
    title:'Stalo irankiu rinkinys',
    subtitle:'Juodu irankiu rinkinys',
    price:50,
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1c87YprMt2tRFH32YcJk90uNH8A7QnuvUZg&usqp=CAU'
},
{
    id: uuidv4(),
    title:'Redragon k52',
    subtitle:'Gaming klaviatura, sviecia raudonai',
    price:40,
    imgUrl:'https://img.terabyteshop.com.br/produto/g/teclado-mecanico-gamer-redragon-kumara-k552-switch-blue-com-led-abnt-2-preto_49051.jpg'
},
{
    id: uuidv4(),
    title:'Kondicionierius',
    subtitle:'Apynaujis kondicionierius, kuriasi kaip naujas',
    price:130,
    imgUrl:'https://www.tristar.eu/product/image/medium/ac-5426_0.jpg'
}]

export default itemsList;
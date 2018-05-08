const fs = require('fs');
for(var code of [
    fs.readFileSync('sbn.js'),
    fs.readFileSync('linalg.js')
]) {
    eval(code.toString());
}

/*
var l1 = [
    { "name": "RSa_R", "p": [[0.5198,-1.93018], [0.49791,-1.92895], [0.475917,-1.92870], [0.45382,-1.9290], [0.43190,-1.9298], [0.4100,-1.93083], [0.38838,-1.93204], [0.3663,-1.93342], [0.34485,-1.93488], [0.322965,-1.93644], [0.30148,-1.9380], [0.27975,-1.93968], [0.258270,-1.94134], [0.236527,-1.9429], [0.21487,-1.94430], [0.193383,-1.945], [0.171802,-1.94630], [0.150234,-1.94703], [0.128774,-1.94760], [0.107134,-1.94805], [0.085726,-1.94839], [0.064132,-1.94867], [0.042634,-1.94892], [0.0212688,-1.9491], [-0.00029175,-1.94951], [-0.0217037,-1.94995], [-0.043012,-1.95056]] },
    { "name": "RSa_L", "p": [[1.56903,-0.55004], [1.56528,-0.53692], [1.56133,-0.52373], [1.55732,-0.5106], [1.55323,-0.49761], [1.54914,-0.484669], [1.54496,-0.471548], [1.54080,-0.45852], [1.53658,-0.445356], [1.53240,-0.43232], [1.52818,-0.41913], [1.52400,-0.406052], [1.51980,-0.392859], [1.51563,-0.379700], [1.51145,-0.36649], [1.50712,-0.35321], [1.5027,-0.34016], [1.49834,-0.327035], [1.4939,-0.314013], [1.48949,-0.30083], [1.4851,-0.28782], [1.480,-0.27459], [1.47627,-0.261463], [1.47192,-0.248251], [1.46761,-0.234974], [1.46341,-0.221736], [1.4592,-0.208294], [1.4552,-0.194834], [1.45137,-0.181336]] },
    { "name": "RSb_R", "p": [[-0.070071,-1.9411], [-0.072864,-1.9259], [-0.077844,-1.91095], [-0.084036,-1.89597], [-0.090910,-1.881], [-0.098210,-1.86636], [-0.105780,-1.8516], [-0.113494,-1.8370], [-0.121261,-1.82245], [-0.128498,-1.80771], [-0.135451,-1.79289], [-0.142336,-1.77811], [-0.149183,-1.76327], [-0.155951,-1.74840], [-0.162602,-1.73354], [-0.169103,-1.71870], [-0.175426,-1.70387], [-0.18157,-1.68889], [-0.187369,-1.6739]] },
    { "name": "RSb_L", "p": [[1.435,-0.167628], [1.42006,-0.167884], [1.40500,-0.168340], [1.38987,-0.168918], [1.37467,-0.169562], [1.3595,-0.170225], [1.3443,-0.170875], [1.3288,-0.17149], [1.31367,-0.17202], [1.2983,-0.172479], [1.28304,-0.172817], [1.2677,-0.173023], [1.25255,-0.17307], [1.23717,-0.172953], [1.22202,-0.172636], [1.20691,-0.172097], [1.19180,-0.171303], [1.17677,-0.170218], [1.16183,-0.168794], [1.14699,-0.166966]] }
];

var l2 = [
    { "name": "RSa_R", "p": [[1.73061,0.315538], [1.72482,0.308497], [1.71924,0.301060], [1.71398,0.293441], [1.70889,0.285512], [1.70406,0.27744], [1.69938,0.269131], [1.694,0.26072], [1.69052,0.252103], [1.68631,0.24343], [1.68217,0.234575], [1.67817,0.225703], [1.67421,0.216674], [1.67036,0.207646], [1.6665,0.198504], [1.6627,0.189352], [1.65902,0.180135], [1.65517,0.170903], [1.65129,0.161756], [1.64746,0.152644], [1.64360,0.143388], [1.63982,0.134211], [1.63602,0.124904], [1.63227,0.115620], [1.62855,0.106291], [1.6248,0.096897], [1.62122,0.087531], [1.6175,0.078025], [1.61403,0.068605], [1.61047,0.058984], [1.60702,0.049477], [1.60356,0.039754], [1.60021,0.0301418], [1.59688,0.0203087], [1.59367,0.0105917]] },
    { "name": "RSb_R", "p": [[1.58432,0.0068453], [1.5750,0.018594], [1.5646,0.029234], [1.55344,0.0388119], [1.5417,0.047418], [1.5297,0.0551860], [1.51768,0.0622091], [1.5054,0.06862], [1.49311,0.074538], [1.48073,0.080122], [1.46832,0.085456], [1.45585,0.09049], [1.44331,0.095289], [1.4309,0.099781], [1.4184,0.104146], [1.40595,0.10837], [1.39343,0.112530], [1.38092,0.116680]] },
    { "name": "RS_R", "p": [[1.59055,-0.0070180], [1.59425,-0.0198068], [1.59717,-0.032421], [1.59948,-0.044983], [1.60124,-0.057445], [1.60251,-0.069649], [1.60338,-0.081732], [1.60389,-0.09373], [1.60408,-0.105535], [1.60398,-0.117219], [1.60362,-0.12882], [1.60302,-0.140248], [1.60220,-0.15159], [1.60117,-0.162821], [1.5999,-0.173936], [1.59854,-0.184948], [1.5969,-0.195848], [1.59518,-0.206658], [1.59324,-0.21732], [1.59112,-0.227921], [1.58883,-0.238392], [1.58638,-0.248676], [1.58371,-0.25893], [1.58084,-0.2690], [1.57768,-0.278732], [1.5736,-0.287840], [1.5694,-0.296772], [1.56504,-0.305589], [1.56046,-0.31410], [1.5556,-0.322515], [1.55066,-0.3306], [1.54549,-0.33874], [1.54017,-0.34660], [1.53470,-0.354342], [1.52910,-0.36194], [1.5234,-0.36943], [1.51759,-0.376845], [1.51173,-0.38416], [1.50578,-0.39145], [1.49983,-0.39869], [1.49382,-0.40595], [1.4872,-0.41256], [1.48043,-0.41878], [1.47347,-0.42489], [1.46641,-0.430882], [1.459,-0.436736], [1.45194,-0.442465], [1.44454,-0.448024], [1.4369,-0.45344], [1.42932,-0.458675], [1.42152,-0.46370], [1.41355,-0.468538], [1.4054,-0.47313], [1.39712,-0.477482], [1.3886,-0.48154], [1.37994,-0.48528], [1.3710,-0.48866], [1.36192,-0.49164], [1.35255,-0.494176]] },
    { "name": "RSa_L", "p": [[0.069124,2.2534], [0.048406,2.25119], [0.0279554,2.24934], [0.0075542,2.24777], [-0.0127810,2.24643], [-0.033030,2.2452], [-0.0530161,2.2443], [-0.072897,2.2435], [-0.092690,2.242], [-0.112310,2.2425], [-0.131810,2.24238], [-0.151151,2.242], [-0.170527,2.242], [-0.18984,2.24197], [-0.209074,2.24176], [-0.22845,2.2415], [-0.247721,2.2412], [-0.26682,2.2409], [-0.285947,2.2406], [-0.30505,2.24027], [-0.324216,2.2399], [-0.34324,2.2395], [-0.36233,2.2391], [-0.381384,2.2387], [-0.40026,2.23842]] },
    { "name": "SS_R", "p": [[1.34833,-0.48489], [1.3483,-0.47304], [1.3479,-0.46106], [1.34719,-0.44897], [1.34613,-0.43680], [1.34479,-0.42455], [1.34318,-0.41223], [1.3413,-0.39984], [1.33928,-0.38747], [1.33700,-0.375091], [1.33450,-0.36265], [1.33179,-0.35017], [1.32890,-0.33776], [1.32580,-0.325], [1.32249,-0.31284], [1.31899,-0.300407], [1.31528,-0.287977], [1.31137,-0.27554], [1.30724,-0.2631], [1.30291,-0.250780], [1.29835,-0.23843], [1.29356,-0.22613], [1.28816,-0.213901], [1.2824,-0.201794], [1.276,-0.18981], [1.27043,-0.1778], [1.26410,-0.16594], [1.2575,-0.154139], [1.25078,-0.142443], [1.24376,-0.13087], [1.23646,-0.119450], [1.2288,-0.108163], [1.22092,-0.097061], [1.21264,-0.08619], [1.20398,-0.075614], [1.19489,-0.065382], [1.18535,-0.055585], [1.17532,-0.046338], [1.16476,-0.037791], [1.15369,-0.0301411]] }
];
var sph = [
    [27.633770, 12.526350, 22.955387],
    [28.235802, 12.589767, 22.513519],
    [20.049643, 23.875614, 23.239799],
    [20.598557, 23.897095, 23.124758]
];


var sph2 = sbn(l1, l2, sph, 4);
console.log("Morphed coordinates:");
console.log(sph2.map((a)=>a.join(', ')).join('\n'));
*/

let l1 = [], l2 = [];
let txt1 = fs.readFileSync('lineset1.txt').toString().split('\n');
let txt2 = fs.readFileSync('lineset2.txt').toString().split('\n');
let sph = fs.readFileSync('triangle.txt').toString().split('\n');
let nv = parseInt(sph.shift().split(' ')[0]);
let n1 = parseInt(txt1.shift());
let n2 = parseInt(txt2.shift());
let i;
for(i=0;i<n1;i++) {
    l1.push({
        name: txt1[3*i+0],
        p: txt1[3*i+2].split(' ').map((a)=>a.split(',').map((b)=>parseFloat(b)))
    });
}
for(i=0;i<n2;i++) {
    l2.push({
        name: txt2[3*i+0],
        p: txt2[3*i+2].split(' ').map((a)=>a.split(',').map((b)=>parseFloat(b)))
    });
}
sph = sph.splice(0, nv).map((a)=>a.split(' ').map((b)=>parseFloat(b)));
var sph2 = sbn(l1, l2, sph, 4);
console.log("Morphed coordinates:");
console.log(sph2.map((a)=>a.join(', ')).join('\n'));

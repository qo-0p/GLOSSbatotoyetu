let recognition;
let images = {}; // Map image keys to image objects
let wordToImage = {}; // Map words to image keys
let displayedImages = []; // Keep track of displayed images
let lastWord = "";

function preload() {
  // Load images and assign them keys
  images['mapa01'] = loadImage('https://freight.cargo.site/m/E2082584245375325101968802556268/composiao-com-palavras-2.png');
  images['mapa02'] = loadImage('https://freight.cargo.site/m/D2082584245393771846042512107884/composiao-com-palavras-3.png');
    images['mapa03'] = loadImage('https://freight.cargo.site/m/Q2082584245412218590116221659500/composiao-com-palavras-4.png');
  images['mapa04'] = loadImage('https://freight.cargo.site/m/M2082584245430665334189931211116/composiao-com-palavras-5.png');
    images['mapa05'] = loadImage('https://freight.cargo.site/m/J2082584245449112078263640762732/composiao-com-palavras-6.png');
  images['mapa06'] = loadImage('https://freight.cargo.site/m/R2082584245467558822337350314348/composiao-com-palavras-7.png');
    images['mapa07'] = loadImage('https://freight.cargo.site/m/X2082584245486005566411059865964/composiao-com-palavras-8.png');
  images['mapa08'] = loadImage('https://freight.cargo.site/m/T2082584245504452310484769417580/composiao-com-palavras-9.png');
    images['mapa09'] = loadImage('https://freight.cargo.site/m/M2082584245522899054558478969196/composiao-com-palavras-10.png');
  images['mapa10'] = loadImage('https://freight.cargo.site/m/O2082584245541345798632188520812/composiao-com-palavras-11.png');
    images['mapa11'] = loadImage('https://freight.cargo.site/m/N2082584245559792542705898072428/composiao-com-palavras-12.png');
  images['mapa12'] = loadImage('https://freight.cargo.site/m/C2082584245578239286779607624044/composiao-com-palavras-13.png');
    images['mapa13'] = loadImage('https://freight.cargo.site/m/E2082584245596686030853317175660/composiao-com-palavras-14.png');
  images['mapa14'] = loadImage('https://freight.cargo.site/m/E2082584245615132774927026727276/composiao-com-palavras-15.png');
    images['mapa15'] = loadImage('https://freight.cargo.site/m/E2082584245633579519000736278892/composiao-com-palavras-16.png');
  images['mapa16'] = loadImage('https://freight.cargo.site/m/C2082584245652026263074445830508/composiao-com-palavras-17.png');
    images['mapa17'] = loadImage('https://freight.cargo.site/m/M2082584245670473007148155382124/composiao-com-palavras-18.png');
  images['mapa18'] = loadImage('https://freight.cargo.site/m/I2082584245688919751221864933740/composiao-com-palavras-19.png');
    images['mapa19'] = loadImage('https://freight.cargo.site/m/Y2082584245707366495295574485356/composiao-com-palavras-20.png');
  images['mapa20'] = loadImage('https://freight.cargo.site/m/S2082584245725813239369284036972/composiao-com-palavras-1.png');

  // Map words to image keys
  wordToImage['escravo'] = 'mapa01';
  wordToImage['escravos'] = 'mapa01';
  wordToImage['escrava'] = 'mapa01';
  wordToImage['escravas'] = 'mapa01';
  wordToImage['escravatura'] = 'mapa01';
  wordToImage['mercadorias'] = 'mapa01';
  wordToImage['escravidão'] = 'mapa01';
  wordToImage['escravisado'] = 'mapa01';
  wordToImage['moça'] = 'mapa01';
  wordToImage['criado'] = 'mapa01';

  wordToImage['negro'] = 'mapa02';
  wordToImage['negros'] = 'mapa02';
  wordToImage['pretos'] = 'mapa02';
  wordToImage['preta'] = 'mapa02';
  wordToImage['pretas'] = 'mapa02';
  wordToImage['preto'] = 'mapa02';
  wordToImage['mouros'] = 'mapa02';
  wordToImage['mulata'] = 'mapa02';
  wordToImage['negrinha'] = 'mapa02';
  wordToImage['mestiço'] = 'mapa02';
  
  wordToImage['barbosa'] = 'mapa03';
  wordToImage['santiago'] = 'mapa03';
  wordToImage['pai paulino'] = 'mapa03';
  wordToImage['domingos'] = 'mapa03';
  wordToImage['barbuda'] = 'mapa03';
  wordToImage['tomé'] = 'mapa03';
  wordToImage['sebastião'] = 'mapa03';
  wordToImage['almada'] = 'mapa03';
  wordToImage['severa'] = 'mapa03';
  wordToImage['fernanda'] = 'mapa03';
  wordToImage['catarina'] = 'mapa03';
  wordToImage['soledade'] = 'mapa03';
  wordToImage['vimioso'] = 'mapa03';
  wordToImage['santos'] = 'mapa03';
  wordToImage['nascimento'] = 'mapa03';
  
  wordToImage['cabo verdiana'] = 'mapa04';
  wordToImage['português'] = 'mapa04';
  wordToImage['brasileiras'] = 'mapa04';
  wordToImage['guienense'] = 'mapa04';
  wordToImage['portugal'] = 'mapa04';
  wordToImage['brasil'] = 'mapa04';
  wordToImage['portuguesas'] = 'mapa04';
  wordToImage['angola'] = 'mapa04';
  wordToImage['cabo verde'] = 'mapa04';
  wordToImage['moçambique'] = 'mapa04';
  wordToImage['castelhanas'] = 'mapa04';
  wordToImage['pará'] = 'mapa04';
  wordToImage['alfacinha'] = 'mapa04';
  wordToImage['europa'] = 'mapa04';
  
  wordToImage['africano'] = 'mapa05';
  wordToImage['árabes'] = 'mapa05';
  wordToImage['berberes'] = 'mapa05';
  wordToImage['africanos'] = 'mapa05';
  wordToImage['africanas'] = 'mapa05';
  wordToImage['indigenas'] = 'mapa05';
  wordToImage['mundo'] = 'mapa05';
  wordToImage['noites'] = 'mapa05';
  wordToImage['abandonado'] = 'mapa05';
  wordToImage['africanização'] = 'mapa05';
    
  wordToImage['fado'] = 'mapa06';
  wordToImage['fados'] = 'mapa06';
  wordToImage['modinhas'] = 'mapa06';
  wordToImage['modinha'] = 'mapa06';
  wordToImage['morna'] = 'mapa06';
  wordToImage['baile'] = 'mapa06';
  wordToImage['bailes'] = 'mapa06';
  wordToImage['feiras'] = 'mapa06';
  wordToImage['feira'] = 'mapa06';
  wordToImage['vendedoras'] = 'mapa06';
  wordToImage['rituais'] = 'mapa06';
  wordToImage['toureava'] = 'mapa06';
  wordToImage['tourada'] = 'mapa06';
  wordToImage['touradas'] = 'mapa06';
  wordToImage['pandeireta'] = 'mapa06';
  
  wordToImage['preconceito'] = 'mapa07';
  wordToImage['racismo'] = 'mapa07';
  wordToImage['descartados'] = 'mapa07';
  wordToImage['cativeiro'] = 'mapa07';
  wordToImage['descalça'] = 'mapa07';
  wordToImage['preconceitos'] = 'mapa07';
  wordToImage['esteriótipos'] = 'mapa07';
  wordToImage['discriminatória'] = 'mapa07';
  wordToImage['retorno'] = 'mapa07';
  wordToImage['corrente'] = 'mapa07';
  
  wordToImage['músico'] = 'mapa08';
  wordToImage['dança'] = 'mapa08';
  wordToImage['mágicos'] = 'mapa08';
  wordToImage['estudantes'] = 'mapa08';
  wordToImage['existentes'] = 'mapa08';
  wordToImage['magia'] = 'mapa08';
  wordToImage['pesca'] = 'mapa08';
  wordToImage['ferraria'] = 'mapa08';
  wordToImage['olaria'] = 'mapa08';
  wordToImage['tecelagem'] = 'mapa08';
  wordToImage['ama'] = 'mapa08';
  wordToImage['marinheiros'] = 'mapa08';
  wordToImage['varinas'] = 'mapa08';
  wordToImage['varina'] = 'mapa08';
  wordToImage['varredores'] = 'mapa08';
  wordToImage['caiadores'] = 'mapa08';
  wordToImage['calhandreiras'] = 'mapa08';
  wordToImage['limpeza'] = 'mapa08';
  wordToImage['construção'] = 'mapa08';
  
  wordToImage['homem'] = 'mapa09';
  wordToImage['homens'] = 'mapa09';
  wordToImage['mulheres'] = 'mapa09';
  wordToImage['mulheres'] = 'mapa09';
  wordToImage['visigodos'] = 'mapa09';
  wordToImage['humana'] = 'mapa09';
  wordToImage['branco'] = 'mapa09';
  wordToImage['brancos'] = 'mapa09';
  wordToImage['branca'] = 'mapa09';
  wordToImage['impuro'] = 'mapa09';
  wordToImage['pessoa'] = 'mapa09';
  wordToImage['intelectual'] = 'mapa09';
  wordToImage['senhores'] = 'mapa09';
  wordToImage['senhoras'] = 'mapa09';
  wordToImage['coroa'] = 'mapa09';
  wordToImage['corpos'] = 'mapa09';
  
  wordToImage['liberdade'] = 'mapa10';
  wordToImage['abolição'] = 'mapa10';
  wordToImage['alvará'] = 'mapa10';
  wordToImage['abolida'] = 'mapa10';
  wordToImage['livre'] = 'mapa10';
  wordToImage['libertos'] = 'mapa10';
  wordToImage['futurismo'] = 'mapa10';
  wordToImage['livres'] = 'mapa10';
  wordToImage['corpo'] = 'mapa10';
  wordToImage['calçado'] = 'mapa10';
    
  wordToImage['muçulmana'] = 'mapa11';
  wordToImage['igreja'] = 'mapa11';
  wordToImage['religiões'] = 'mapa11';
  wordToImage['religiosidade'] = 'mapa11';
  wordToImage['pelourinho'] = 'mapa11';
  wordToImage['astrologia'] = 'mapa11';
  wordToImage['convento'] = 'mapa11';
  wordToImage['xadrez'] = 'mapa11';
  wordToImage['religiosos'] = 'mapa11';
    
  wordToImage['muralhas'] = 'mapa12';
  wordToImage['bairros'] = 'mapa12';
  wordToImage['ruas'] = 'mapa12';
  wordToImage['cidade'] = 'mapa12';
  wordToImage['largo'] = 'mapa12';
  wordToImage['terreiro'] = 'mapa12';
  wordToImage['fontes'] = 'mapa12';
  wordToImage['praça'] = 'mapa12';
  wordToImage['rua'] = 'mapa12';
  wordToImage['aldeia'] = 'mapa12';
  wordToImage['poço'] = 'mapa12';
  wordToImage['toponímia'] = 'mapa12';
  wordToImage['topónimo'] = 'mapa12';
  
  wordToImage['portuária'] = 'mapa13';
  wordToImage['desembarque'] = 'mapa13';
  wordToImage['desembarcados'] = 'mapa13';
  wordToImage['água'] = 'mapa13';
  wordToImage['rio'] = 'mapa13';
  wordToImage['naval'] = 'mapa13';
  wordToImage['navios'] = 'mapa13';
  wordToImage['navio'] = 'mapa13';
  wordToImage['marinharia'] = 'mapa13';
  wordToImage['mar'] = 'mapa13';
  wordToImage['leme'] = 'mapa13';
  wordToImage['embarcação'] = 'mapa13';
  
  wordToImage['casa'] = 'mapa14';
  wordToImage['porta'] = 'mapa14';
  wordToImage['janelas'] = 'mapa14';
  wordToImage['trigo'] = 'mapa14';
  wordToImage['tabernas'] = 'mapa14';
  wordToImage['hospital'] = 'mapa14';
  wordToImage['culinária'] = 'mapa14';
  wordToImage['armazém'] = 'mapa14';
  wordToImage['mercearia'] = 'mapa14';
  wordToImage['café'] = 'mapa14';
  wordToImage['cavalo'] = 'mapa14';
  wordToImage['miasmas'] = 'mapa14';
  wordToImage['pestilências'] = 'mapa14';
  
  wordToImage['lisboa'] = 'mapa15';
  wordToImage['queluz'] = 'mapa15';
  wordToImage['sacavém'] = 'mapa15';
  wordToImage['belas'] = 'mapa15';
  wordToImage['bahia'] = 'mapa15';
  wordToImage['cacém'] = 'mapa15';
  wordToImage['rossio'] = 'mapa15';
  wordToImage['figueira'] = 'mapa15';
  wordToImage['tejo'] = 'mapa15';
  wordToImage['madragoa'] = 'mapa15';
  
  wordToImage['mocambo'] = 'mapa16';
  wordToImage['labirínticas'] = 'mapa16';
  wordToImage['lugares'] = 'mapa16';
  wordToImage['estalagens'] = 'mapa16';
  wordToImage['territorio'] = 'mapa16';
  wordToImage['domínios'] = 'mapa16';
  wordToImage['colónias'] = 'mapa16';
  wordToImage['bairro'] = 'mapa16';
  wordToImage['urbana'] = 'mapa16';
  wordToImage['trinas'] = 'mapa16';
        
  wordToImage['trabalhadores'] = 'mapa17';
  wordToImage['astrólogos'] = 'mapa17';
  wordToImage['feiticeiros'] = 'mapa17';
  wordToImage['artesãos'] = 'mapa17';
  wordToImage['varinas'] = 'mapa17';
  wordToImage['respeito'] = 'mapa17';
    
  wordToImage['pacíficos'] = 'mapa18';
  wordToImage['família'] = 'mapa18';
  wordToImage['forras'] = 'mapa18';
  wordToImage['mãe'] = 'mapa18';
  wordToImage['ribeirinhas'] = 'mapa18';
  wordToImage['indivíduos'] = 'mapa18';
  wordToImage['culturais'] = 'mapa18';
  wordToImage['forros'] = 'mapa18';
  wordToImage['doméstica'] = 'mapa18';
  wordToImage['oportunidades'] = 'mapa18';
    
  wordToImage['sociedade'] = 'mapa19';
  wordToImage['cultura'] = 'mapa19';
  wordToImage['culturas'] = 'mapa19';
  wordToImage['linguas'] = 'mapa19';
  wordToImage['magia'] = 'mapa19';
  wordToImage['jornais'] = 'mapa19';
  wordToImage['racial'] = 'mapa19';
  wordToImage['futurismo'] = 'mapa18';
  wordToImage['tertulias'] = 'mapa18';
  wordToImage['elite'] = 'mapa18';
  wordToImage['umbundo'] = 'mapa18';
  wordToImage['convivência'] = 'mapa18';
  wordToImage['espetaculo'] = 'mapa18';
    
  wordToImage['venda'] = 'mapa20';
  wordToImage['vender'] = 'mapa20';
  wordToImage['compras'] = 'mapa20';
  wordToImage['comercializar'] = 'mapa20';
  wordToImage['comércio'] = 'mapa20';
  wordToImage['compradores'] = 'mapa20';
  wordToImage['proprietários'] = 'mapa20';
  wordToImage['vendia'] = 'mapa20';
  wordToImage['produto'] = 'mapa20';
  wordToImage['vende-se'] = 'mapa20';
  wordToImage['importação'] = 'mapa20';
  wordToImage['tráfico'] = 'mapa20';
  wordToImage['exportação'] = 'mapa20';
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display', 'block');
  canvas.style('margin', 'auto');
  canvas.style('border', 'none');
  background(255);

  // Initialize Speech Recognition
  recognition = new webkitSpeechRecognition();
  recognition.lang = 'pt-PT';
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = gotSpeech;
  recognition.start();
}

function gotSpeech(event) {
  let result = event.results[event.results.length - 1];
  let transcript = result[0].transcript.trim().toLowerCase();

  // Only react if the word is different from the last one
  if (transcript !== lastWord) {
    lastWord = transcript;

    // Check if the word maps to an image key
    if (wordToImage.hasOwnProperty(transcript)) {
      let imageKey = wordToImage[transcript];
      let img = images[imageKey];
      if (img) {
        displayedImages.push(img); // Add the image to the stack
        drawImages(); // Redraw all stacked images
      }
    }
  }
}


function windowResized() {
  // Resize the canvas whenever the window is resized
  resizeCanvas(windowWidth, windowHeight);
  drawImages(); // Redraw the images after resizing the canvas
}

function drawImages() {
  background(255); // Clear the canvas

  // Display all stacked images
  for (let img of displayedImages) {
    imageMode(CENTER); // Center the image
    let aspectRatio = img.width / img.height;

    // Calculate dimensions to fit the canvas while maintaining aspect ratio
    let imgWidth = width;
    let imgHeight = imgWidth / aspectRatio;

    if (imgHeight > height) {
      imgHeight = height;
      imgWidth = imgHeight * aspectRatio;
    }

    image(img, width / 2, height / 2, imgWidth, imgHeight); // Draw the image centered
  }
}
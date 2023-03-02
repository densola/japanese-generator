// Characters obtained from https://freejapaneselessons.com/japanese-alphabet-hiragana/
let hiragana = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", 
                "が", "ぎ", "ぐ", "げ", "ご", "さ", "し", "す", "せ", "そ", 
                "ざ", "じ", "ず", "ぜ", "ぞ", "た", "ち", "つ", "て", "と", 
                "だ", "ぢ", "づ", "で", "ど", "な", "に", "ぬ", "ね", "の", 
                "は", "ひ", "ふ", "へ", "ほ", "ば", "び", "ぶ", "べ", "ぼ", 
                "ぱ", "ぴ", "ぷ", "ぺ", "ぽ", "ま", "み", "む", "め", "も", 
                "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", 
                "ん"];

let katakana = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", 
                "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", 
                "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", 
                "マ", "ミ", "ム", "メ", "モ", "ラ", "リ", "ル", "レ", "ロ", 
                "ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", 
                "ダ", "ヂ", "ヅ", "デ", "ド", "バ", "ビ", "ブ", "ベ", "ボ", 
                "パ", "ピ", "プ", "ペ", "ポ", "ヤ", "ユ", "ヨ", "ワ", "ン"];

function generateJapanese(characterType, characterAmount) {
    let jpString = '';
    for (i = 0; i < characterAmount; i++) {
        jpString += characterType[Math.floor(Math.random() * characterType.length)];
    }
    return jpString;
};

function convertCharacterType(htmlCharacterType) {
    let trueType;
    if (htmlCharacterType == 'hiragana') {
        trueType = hiragana;
    }
    else if (htmlCharacterType == 'katakana') {
        trueType = katakana;
    }
    return trueType;
};

function convertToNum(num) {
    return Math.round(parseInt(num));
};
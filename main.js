let submitBtn = document.getElementById('submit-btn');
let japaneseCharacter = document.getElementById('japanese-characters');

submitBtn.addEventListener('click', () => {
    let htmlCharacterType = document.getElementById('character-type').value;
    let htmlCharacterAmount = document.getElementById('character-amount').value;

    japaneseCharacter.innerHTML = generateJapanese(
        convertCharacterType(htmlCharacterType), convertToNum(htmlCharacterAmount)
        );
});

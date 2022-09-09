function Result(text) {
    const regular = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;

    let Strings = text;

    // 1단계
    Strings = Strings.toLowerCase();

    // 2단계
    Strings = Strings.replace(regular, "");

    // 3단계
    Strings = Strings.replace(/([.])+/g, "$1");

    // 4단계
    if(Strings.charAt(0) === '.') Strings = Strings.substr(1);

    if(Strings.charAt(Strings.length - 1) === '.') Strings = Strings.substr(0, Strings.length - 1);
    
    // 5단계
    if(Strings.length === 0) Strings = 'a';

    // 6단계
    if(Strings.length > 15) Strings = Strings.substr(0, 15);

    // 7단계
    while(Strings.length < 3) {
        Strings += Strings.charAt(Strings.length - 1);
    }

    // 기타
    if(Strings.charAt(0) === '.') Strings = Strings.substr(1);

    if(Strings.charAt(Strings.length - 1) === '.') Strings = Strings.substr(0, Strings.length - 1);

    return Strings;
}

let Tests = "abcdefghijklmn.p";

console.log(Result(Tests));
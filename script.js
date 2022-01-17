var objects = [

    {
        sentence: 'バスケの王様で名の知れているNBAプレーヤーは誰？',
        answer: 'レブロン・ジェームズ'
    },

    {
        sentence: '20―21年にシーズンMVPを受賞したNBAプレーヤーは誰？',
        answer: '二コラ・ヨキッチ'
    },

    {
        sentence: '2022年現在、ステフィン・カリーが所属しているチームはどこ？',
        answer: 'ゴールデンステイト・ウォリアーズ'
    },

    {
        sentence: '2022年現在、NBAに契約している日本人選手は何人？',
        answer: '3人'
    }

];


function checkAnswer(input) {
    var isCorrect = false;
    if (input == this.answer) {
        isCorrect == true;
    }
    return isCorrect;
}

function getObjects() {
    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        object.check = checkAnswer;
    }
    return objects;
}
// Example code for creating a basic quiz app in JavaScript

// HTML Structure (embed this in your HTML file)
/*
<div id="quizContainer">
    <div id="question">質問がここに表示されます</div>
    <div id="options">
        <button class="option" onclick="selectOption(0)">選択肢 1</button>
        <button class="option" onclick="selectOption(1)">選択肢 2</button>
        <button class="option" onclick="selectOption(2)">選択肢 3</button>
    </div>
    <button id="nextButton" onclick="nextQuestion()">次へ</button>
    <div id="result">結果がここに表示されます</div>
    <div id="explanation">解説がここに表示されます</div>
</div>
*/

// JavaScript Code
const quizData = [
    {
        question: "お正月に食べるおせち料理の意味で「田作り」が表すものは何ですか？",
        options: ["豊作", "健康", "家内安全"],
        correct: 0,
        explanation: "田作りは豊作を願って作られる料理で、田畑を肥沃にする意味があります。"
    },
    {
        question: "お正月に飾る「門松」の役割は何でしょう？",
        options: ["家を装飾する", "神様を迎える", "魔除け"],
        correct: 1,
        explanation: "門松は年神様を家に迎えるための目印として飾られます。"
    },
    {
        question: "お正月に行われる「書き初め」で最初に書く文字の意味は？",
        options: ["新年の決意", "神への祈り", "家族の健康"],
        correct: 0,
        explanation: "書き初めでは新年の決意や抱負を最初に書く習慣があります。"
    },
    {
        question: "お正月に食べる「雑煮」に入れる主な具材は何ですか？",
        options: ["もち", "うどん", "ごはん"],
        correct: 0,
        explanation: "雑煮には地域によって異なりますが、主にもちが入ります。"
    },
    {
        question: "十二支の最初に来る動物は何ですか？",
        options: ["ねずみ", "うし", "とら"],
        correct: 0,
        explanation: "十二支の最初はねずみで、知恵や繁栄を象徴します。"
    },
    {
        question: "年末年始の恒例行事「紅白歌合戦」が初めて行われたのはいつですか？",
        options: ["1945年", "1951年", "1955年"],
        correct: 1,
        explanation: "紅白歌合戦は1951年に初めて放送されました。"
    },
    {
        question: "お正月の伝統遊び「羽根つき」で使用する道具は何ですか？",
        options: ["羽子板と羽根", "こま", "けん玉"],
        correct: 0,
        explanation: "羽根つきでは羽子板と羽根を使い、魔除けの意味も込められています。"
    },
    {
        question: "「鏡開き」はお正月の何を意味する行事ですか？",
        options: ["神様への感謝", "家族の繁栄", "新年の健康祈願"],
        correct: 0,
        explanation: "鏡開きは神様への感謝を込めて鏡餅を割る行事です。"
    },
    {
        question: "お正月に行われる「初詣」の由来は何でしょう？",
        options: ["神様への祈り", "年神様を迎える", "家内安全を願う"],
        correct: 1,
        explanation: "初詣は年神様を迎え、新年の無事を祈るために行われます。"
    },
    {
        question: "お正月に飾る「しめ飾り」の意味は何ですか？",
        options: ["魔除け", "新年の飾り", "豊作祈願"],
        correct: 0,
        explanation: "しめ飾りは魔除けや神様を迎える清浄な場所を示す意味があります。"
    },
    {
        question: "お正月に配る「お年玉」の由来は何ですか？",
        options: ["年神様への感謝", "収穫のお礼", "贈り物文化"],
        correct: 0,
        explanation: "お年玉は年神様への感謝としてお供えしたもちが由来です。"
    },
    {
        question: "お正月の「干支」はどのように決まるでしょう？",
        options: ["太陽暦", "月の周期", "干支の順番"],
        correct: 2,
        explanation: "干支は十二支の順番に従って毎年変わります。"
    },
    {
        question: "お正月に食べる「黒豆」の意味は何ですか？",
        options: ["健康", "働き者", "幸運"],
        correct: 1,
        explanation: "黒豆は働き者を象徴し、勤勉な生活を願います。"
    },
    {
        question: "お正月に遊ぶ「こま回し」の起源はどこですか？",
        options: ["中国", "日本", "インド"],
        correct: 0,
        explanation: "こま回しの起源は中国にあり、江戸時代に日本でも広まりました。"
    },
    {
        question: "お正月に飾る「鏡餅」の形の由来は何ですか？",
        options: ["太陽と月", "山と川", "稲作"],
        correct: 0,
        explanation: "鏡餅は太陽と月を象徴し、円満な生活を願います。"
    },
    {
        question: "「お年賀」とは何を指しますか？",
        options: ["新年の挨拶", "贈り物", "祝いの宴"],
        correct: 1,
        explanation: "お年賀は新年の贈り物を意味します。"
    },
    {
        question: "お正月に行われる「七草粥」の目的は何でしょう？",
        options: ["健康祈願", "無病息災", "収穫の願い"],
        correct: 1,
        explanation: "七草粥は無病息災を願って食べる日本の伝統行事です。"
    },
    {
        question: "「年賀状」の文化が始まったのはいつ頃でしょう？",
        options: ["江戸時代", "明治時代", "昭和時代"],
        correct: 1,
        explanation: "年賀状は明治時代に郵便制度が始まったことで普及しました。"
    },
    {
        question: "お正月に神社で受けるお守りの意味は何ですか？",
        options: ["健康", "安全", "神の加護"],
        correct: 2,
        explanation: "お守りは神様の加護を願うものとして受け取ります。"
    },
    {
        question: "お正月の初夢で縁起が良いとされるものは何でしょう？",
        options: ["鷹", "茄子", "富士山"],
        correct: 2,
        explanation: "初夢で縁起が良いとされるのは富士山、鷹、茄子の順です。"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
    document.getElementById('result').textContent = '';
    document.getElementById('explanation').textContent = '';
}

function selectOption(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
        document.getElementById('result').textContent = '正解！';
    } else {
        document.getElementById('result').textContent = '不正解...';
    }
    document.getElementById('explanation').textContent = currentQuestion.explanation;
    document.querySelectorAll('.option').forEach(option => {
        option.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        document.querySelectorAll('.option').forEach(option => {
            option.disabled = false;
        });
    } else {
        document.getElementById('quizContainer').innerHTML = `<h2>クイズ終了！</h2><p>あなたのスコアは ${score} / ${quizData.length} です。</p>`;
    }
}

// Initialize quiz
loadQuestion();

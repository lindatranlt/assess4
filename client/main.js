

const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const motivationBtn = document.querySelector("#motivationButton")
const dateBtn = document.querySelector("#dateBtn")
const timeBtn = document.querySelector("#timeBtn")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getMotivated = () => {
    axios.get("http://localhost:4000/api/motivated/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
    };

    const getDate= () => {
        axios.get("http://localhost:4000/api/date/")
            .then(res => {
                const data = res.data;
                alert(data);
        });
    };

    const getTimeNow= () => {
        axios.get("http://localhost:4000/api/time/")
            .then(res => {
                const data = res.data;
                alert(data);
        });
    };
    
    

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
motivationBtn.addEventListener('click', getMotivated)
dateBtn.addEventListener('click', getDate)
timeBtn.addEventListener('click', getTimeNow)
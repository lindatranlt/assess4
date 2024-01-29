module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getFortune: (req, res) => {
        const fortunes = ["A career in Cybersecurity awaits you!", "You will pass your assessment!", "You will succeed in life and this bootcamp too!", "Happiness in life and work awaits you!", "Don't focus on the hard times, focus on your code!"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getMotivated: (req, res) => {
        const motivations = ["You've got this!", "If you're reading this, consider yourself blessed!", "Success is inevitable!", "Just do it!", "Put in the work and the results will follow"];

        let randomIndex = Math.floor(Math.random() * motivations.length);
        let randomMotivations= motivations[randomIndex];

        res.status(200).send(randomMotivations);
    },

    getDate: (req, res) => {
    let today = new Date();
    let date = (today.getMonth()+1) +'.'+ today.getDate() +'.'+ today.getFullYear();

    res.status(200).send(date);
    },

    getTimeNow: (req, res) => {
        let today = new Date();
        let time = today.getHours() +':'+ today.getMinutes() +':'+ today.getSeconds();
    
        res.status(200).send(time);
    },

}
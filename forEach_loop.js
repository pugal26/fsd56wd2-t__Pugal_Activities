//Created my resume in JSON format
let resume = {
    name: 'Pugalendhi',
    contact: 'pugalcud@gmail.com',
    location: 'Pondicherry',
    education: ['B.com., MBA(HR)'],
    noOfYearExperience: 5,
    experience: {
        present: ['Team Lead','JV Tech'],
        past: {
            past1: ['2018-10 to 2020-03','navagro'],
            past2: ['2016-05 to 2018-10','LIFE CURE PHARMACEUTICALS']
    },
    skills: ['MS Office','Google Workspace']
}
}


// //forEach Loop
let entries = Object.entries(resume);
entries.forEach(entry => {
    console.log(entry[0], ':', entry[1]);
})

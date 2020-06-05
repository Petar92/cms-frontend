const currentDate = () => {
    let d = new Date().toISOString();
    const datum = new Date(d)
    const day = datum.getDate()
    const month = datum.getMonth() + 1
    const year = datum.getFullYear()
    console.log(d)
    return day + "." + month + "." + year
    
}

const news = [

    {id: 1,
    img:'obavestenje.png',
    date: currentDate(),
    text:'Obaveštenje za sve goste!',
    focus: true},

    {id: 2,
    img:'doček-nove-2020-godine.jpg',
    date: currentDate(),
    text:'Ponuda za doček Nove 2020. godine  i reprizu',
    focus: true},
    
    {id: 3,
    img:'bazen.JPG',
    date: currentDate(),
    text:'Iskoristite promo period i uživajte',
    focus: false},

    {id: 4,
    img:'jesenja-akcija-2018---breza.png',
    date: currentDate(),
    text:'VELIKA JESENJA AKCIJA',
    focus: true},

    {id: 5,
    img:'akcija_breza.JPG',
    date:currentDate(),
    text:'AKCIJA PONOVO U TOKU!!',
    focus: false},

    {id: 6,
    img:'cenovnik.png',
    date: currentDate(),
    text:'CENOVNIK ZA 2020. GODINU',
    focus: false}
]

export default news
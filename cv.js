//consider the following data being fetched through an api
const data= [
    {
        image: "https://randomuser.me/api/portraits/men/51.jpg",
        name: 'William Johan', 
        age: 22,
        city: 'New York',
        specialization: 'Python',
        experience: 10,
        hobbies: 'Cycling, Swimming'
    },
    {
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        name: 'Albert Robins',
        age: 35,
        city: 'Florida',
        specialization: 'JavaScript',
        experience: 15,
        hobbies: 'Reading'
    },
    {
        image: "https://randomuser.me/api/portraits/women/51.jpg",
        name: 'Selina Houston',
        age: 42,
        city: 'Washington',
        specialization: 'c++',
        experience: 25,
        hobbies: 'Dancing, Singing'
    },
    {
        image: "https://randomuser.me/api/portraits/men/55.jpg",
        name: 'Christopher Julius',
        age: 25,
        city: 'Florida',
        specialization: 'Java',
        experience: 5,
        hobbies: 'Cycling, Cooking'
    },
    {
        image: "https://randomuser.me/api/portraits/men/57.jpg",
        name: 'Shanouf Ansari',
        age: 26,
        city: 'Mumbai',
        specialization: 'Swift',
        experience: 10,
        hobbies: 'Drawing, Cycling, Reading'
    },
    {
        image: "https://randomuser.me/api/portraits/women/61.jpg",
        name: 'Taylor Alison',
        age: 34,
        city: 'Nash Ville',
        specialization: 'Python',
        experience: 15,
        hobbies: 'Singing, Dancing'
    },
    {
        image: "https://randomuser.me/api/portraits/women/67.jpg",
        name: 'Jenifer Lopez',
        age: 29,
        city: 'New York',
        specialization: 'Python',
        experience: 5,
        hobbies: 'Cooking, Swimming'
    },
    {
        image: "https://randomuser.me/api/portraits/women/70.jpg",
        name: 'Marie Curie',
        age: 30,
        city: 'Paris',
        specialization: 'JavaScript',
        experience: 10,
        hobbies: 'Swimming, Horse-Riding'
    },
    {
        image: "https://randomuser.me/api/portraits/men/71.jpg",
        name: 'Johann Henry',
        age: 40,
        city: 'Dubai',
        specialization: 'Python',
        experience: 20,
        hobbies: 'Reading, Travelling'
    },
    {
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        name: 'Christina Joseph',
        age: 32,
        city: 'Toronto',
        specialization: 'JavaScript',
        experience: 12,
        hobbies: 'Singing, Travelling, Reading'
    }
];
//Defining the iterator function to iterate through the data upon request
function dataIterator(data){
    let nextIndex=0;
    return {
         next: function(){
             return nextIndex<data.length?
             {value: data[nextIndex++], done: false}:
             {value: undefined, done: true};
         }
    }
}
//defining a variable that will contain the iterator function which can be called by the nextCandidate 
//function to give the next object of the array data
const iteratorFunc=dataIterator(data);
//calling the nextCandidate function to display the first cv on loading
nextCandidate();
//defining the nextCandidate function
function nextCandidate(){
    let newCandidate=iteratorFunc.next().value;
    let display=document.getElementById('maincv');
    if(newCandidate!=undefined){
        display.innerHTML=`<div id="cvimage">
                            <img src="${newCandidate.image}" alt="${newCandidate.name}">
                        </div>
                        <div id="cvname">
                            <b>Name:</b> ${newCandidate.name}
                        </div>
                        <div id="cvage">
                            <b>Age:</b> ${newCandidate.age} years
                        </div>
                        <div id="cvcity">
                            <b>City:</b> ${newCandidate.city}
                        </div>
                        <div id="cvspecialization">
                            <b>Specialization:</b> ${newCandidate.specialization}
                        </div>
                        <div id="cvexperience">
                            <b>Experience:</b> ${newCandidate.experience} years
                        </div>
                        <div id="cvhobbies">
                            <b>Hobbies:</b> ${newCandidate.hobbies}
                        </div>
                        <div id="nextbtn">
                            <button id="btn" onclick="nextCandidate()">Next Candidate</button>
                        </div>`;  
    }
    else{
        alert('The Applications End Here');
        window.location.reload();
    }              
}
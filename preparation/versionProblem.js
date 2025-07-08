


// Version Data
data = [{
    version: "3.1.3",
    releaseDate: new Date("02-02-2010"),
    bugID: "BUG1",
    features: ["Enhanced accessibility", "Expandable notifications."],
    author: ["Apple", "Vivo"],
    versionType: "Patch"
},
{
    version: "4.2.1",
    releaseDate: new Date("05-11-2010"),
    bugID: "BUG2",
    features: ["Enhanced accessibility.", "Multichannel audio"],
    author: ["Oppo", "Samsung"],
    versionType: "Enhancement"
},
{
    version: "5.1.1",
    releaseDate: new Date("07-05-2012"),
    bugID: "BUG3",
    features: ["Calendar provider enhancements.", "Accessibility refinements such as improved content access for screen readers"],
    author: ["Apple", "Samsung"],
    versionType: "Patch"
},
{
    version: "6.1.6",
    releaseDate: new Date("01-02-2014"),
    bugID: "BUG4",
    features: ["Stability improvements", "Better camera performance"],
    author: ["Apple", "Xiomi"],
    versionType: "Major"
},
{
    version: "7.1.2",
    releaseDate: new Date("09-06-2014"),
    bugID: "BUG5",
    features: ["Smoother screen rotation", "Stability improvements"],
    author: ["Xiomi"],
    versionType: "Patch"
}
]
// Bug list
const bugList = [{
    bugID: "BUG1",
    bug: ["Fix issue", "performance enhancements bug."]
}, {
    bugID: "BUG2",
    bug: ["Fix Bluetooth audio streaming bugs.", "Maps navigation and alarms"]
}, {
    bugID: "BUG3",
    bug: ["Fixed a bug in the People application where December was not displayed on the date selector when adding an event to a contact"]
}, {
    bugID: "BUG4",
    bug: ["audio profile for speakerphone bugs", "video playback and password failures"]
}, {
    bugID: "BUG5",
    bug: ["file-based encryption bugs."]
}
]

// How many releases were made in year
console.log('Question 1')

const findReleaseByYear = (year) => {
    let years = []
    let count = 0;

    data.forEach(element => {
        let year = element.releaseDate;
        getAllYears = year.getFullYear()
        years.push(getAllYears)
    });
    years.filter((yearArr) => {
        if (yearArr.toString() === year) {
            count++
        }
        else {
            count = null
        }

    })

    console.log(`${count} releases were made in year ${year} `)



}
findReleaseByYear('2014');

// In which release specific bugid is present
console.log('Question 2')

const findReleaseByBug = (bug) => {
    bugList.forEach(data => {
        if (bug === data.bugID) {
            console.log('The Specific Bug is present in', data.bugID)
            console.log('Bug List', data.bug)

        }
    })

}

findReleaseByBug('BUG4')

// Which author has worked in many releases
console.log('Question 3')

const findAuthor = () => {


    let authorArr = []

    data.forEach(auth => {
        authorList = auth.author;
        for (i of authorList) {
            authorArr.push(i)

        }

    })
   
    maxAuth = authorArr.reduce((acc, curr) => {
  
       acc < curr ? curr : acc
       return acc;
    },)
    

    console.log(`${maxAuth}, have worked in many release`)

}
findAuthor()






//How many releases were type of major;
console.log('Question 4')

const findType = (type) => {
    let count = 0
    data.forEach((data) => {


        if (type === data.versionType) {
            count++
        }
    })
    console.log(`${count} releases were type of ${type}`)


}
findType('Major')

//How many versions have the specific feature name
console.log('Question 5')
const findVersionByFeature = (feature) => {
    let count = 0;
    data.forEach(feat => {
        let features = feat.features;
        for (i of features) {

            if (i.includes(feature)) {
                count++
                console.log('$----', feat)
            }


        }
    })
    console.log(`${count} versions have the specific feature name`)

}
findVersionByFeature('Smoother')
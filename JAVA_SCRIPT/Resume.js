const resume =
{
    "id": "2215001943",
    "fullName": "Vijay Kumar",
    "age": 20,
    "dob": "04 july 2024",
    "E-mail": "vijay@gla.ac.in",
    "pinCode": 841238,
    "Contact-Detail": [
        {
            "type": "mobile",
            "Label": "Primary",
            "value": "131548443516"
        },
        {
            "type": "mobile",
            "Label": "Secondary",
            "value": "131548443516"
        },
        {
            "type": "mobile",
            "Label": "Whatapp Number",
            "value": "131548443516"
        }
    ],

    "current-Address": [
        {
            "type": "address",
            "label": "current Address",
            "state": "Bihar",
            "Distic": "Siwan",
            "zip": 841238
        }
    ],
    "parmanent-Address": [
        {
            "type": "address",
            "label": "parmanent Address",
            "state": "Bihar",
            "Distic": "Siwan",
            "zip": 841238
        }
    ],
    "Qualification": [
        {
            "type": "college",
            "label": "College_Study",
            "institution": "Gla University Mtahura",
            "degree": "B-Tech",
            "Branch": "CSE",
            "year": 2026
        },
        {
            "type": "Schooling",
            "label": "Schooling",
            "institution": "Mahaviori Saraswati Vidya Mandir",
            "degree": "10+2",
            "year": 1019
        }
    ],
    "Skills": ["HTML", "CSS", "JavaScript", "Node JS", "React JS", "Exprees JS", "C-Programming", "C++", "Python", "Java"
    ],
    "Experinces": [
        {
            "type": "company Skill",
            "lavel": "Company Skill",
            "Company-Name": "SkillCred",
            "Skill": "Advance SQL",
            "Position": "Data Analyiser",
            "Duration": "Two Month",
            "Description": "Worked on many database and table and also play with data"
        }
    ]
}

const degree = resume.Qualification[0].degree;
const college = resume.Qualification[0].institution;
const dob = resume.dob;
const primaryNumber = resume["Contact-Detail"][0];
const secondaryNumber = resume["Contact-Detail"][1];

console.log(resume);
console.log(`Degree Of Qualification: ${degree}`);
console.log("My College is:", college);
console.log("DOB:", dob);
console.log("🚀 ~ secondaryNumber:", secondaryNumber)
console.log("🚀 ~ primaryNumber:", primaryNumber)



const resumePreTag = document.querySelector("#resume");
console.log(resumePreTag.innerHTML = JSON.stringify(resume, "", 2));



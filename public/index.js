const firebaseConfig = {
    apiKey: "AIzaSyBVKFgBOV85QM7IMo0Clx_HIuIKC9W7S-Q",
    authDomain: "big-five-personality-tes-a8164.firebaseapp.com",
    databaseURL: "https://big-five-personality-tes-a8164-default-rtdb.firebaseio.com",
    projectId: "big-five-personality-tes-a8164",
    storageBucket: "big-five-personality-tes-a8164.appspot.com",
    messagingSenderId: "853184474668",
    appId: "1:853184474668:web:ef7ff92f25cf71c7c62b89",
    measurementId: "G-BG724VR80M"
};
firebase.initializeApp(firebaseConfig);


var database = firebase.database()

var val_name = ""
var val_age = ""
var val_gender = ""
var val_is_a_student = ""
var val_name_of_college = ""
var val_course_name = ""
var val_branch = ""
var val_year_of_study = ""
var val_is_working = ""
var val_designation = ""
var val_years_of_experience = ""
//var val_name_of_institution = ""
var val_state = ""
var val_country = ""

function validate() {
    if (val_name.trim() == "") {
        alert("Enter a valid name")
        return false
    }
    if (val_age.trim() == "") {
        alert("Enter a valid age")
        return false
    }
}

function getPrimaryDetails() {

    var nameBox = document.getElementById('q13r1')
    val_name = nameBox.value

    var ageBox = document.getElementById('q14r1')
    val_age = ageBox.value

    var genderResponse = document.getElementsByName('q15')
    for (var radio of genderResponse) {
        if (radio.checked) {
            val_gender = radio.value
            status_d1 = 1
        }
    }

    var isAStudentResponse = document.getElementsByName('q16')
    for (var radio of isAStudentResponse) {
        if (radio.checked) {
            val_is_a_student = radio.value
            status_d2 = 1
        }
    }

    var nameOfCollegeBox = document.getElementById('q17r1')
    val_name_of_college = nameOfCollegeBox.value

    var courseNameBox = document.getElementById('q23r1')
    val_course_name = courseNameBox.value

    var branchBox = document.getElementById('q24r1')
    val_branch = branchBox.value

    var yearOfStudyBox = document.getElementById('q25r1')
    val_year_of_study = yearOfStudyBox.value

    var isWorkingResponse = document.getElementsByName('q18')
    for (var radio of isWorkingResponse) {
        if (radio.checked) {
            val_is_working = radio.value
            status_d3 = 1
        }
    }

    var designationBox = document.getElementById('q19r1')
    val_designation = designationBox.value

    var yearsOfExperienceBox = document.getElementById('q20r1')
    val_years_of_experience = yearsOfExperienceBox.value

    // var nameOfInstitutionBox = document.getElementById('q20r1')
    // val_name_of_institution = nameOfInstitutionBox.value

    var stateBox = document.getElementById('q21r1')
    val_state = stateBox.value

    var countryBox = document.getElementById('q22r1')
    val_country = countryBox.value

    validate()
}


var value1 = 0
var value2 = 0

//for anxiety qns
var r1 = 0
var r2 = 0
var r3 = 0
var r4 = 0
var r5 = 0
var r6 = 0
var r7 = 0

var r8 = 0

var val_extraversion = 0
var val_agreeableness = 0
var val_conscientious = 0
var val_neuroticism = 0
var val_opennes_to_experience = 0
var val_anxiety_level = 0
var val_has_existing_mental_condition = ""
var val_the_existing_mental_condition = ""

var status_d1 = 0
var status_d2 = 0
var status_d3 = 0
var status_q1 = 0
var status_q2 = 0
var status_q3 = 0
var status_q4 = 0
var status_q5 = 0
var status_q6 = 0
var status_q7 = 0
var status_q8 = 0
var status_q9 = 0
var status_q10 = 0

var status_q26 = 0
var status_q27 = 0
var status_q28 = 0
var status_q29 = 0
var status_q30 = 0
var status_q31 = 0
var status_q32 = 0

var status_q33 = 0

function getExtraversion() {
    var response = document.getElementsByName('q6');
    var response2 = document.getElementsByName('q1'); //R

    for (var radio of response) {
        if (radio.checked) {
            value1 = parseFloat(radio.value);
            status_q6 = 1
        }
    }

    for (var radio of response2) {
        if (radio.checked) {
            value2 = parseFloat(radio.value);
            value2 = (5 - value2) + 1
            status_q1 = 1
        }
    }

    val_extraversion = value1 + value2
    val_extraversion = val_extraversion / 2
}

function getAgreeableness() {
    var response = document.getElementsByName('q2');
    var response2 = document.getElementsByName('q7'); //R

    for (var radio of response) {
        if (radio.checked) {
            value1 = parseFloat(radio.value);
            status_q2 = 1
        }
    }

    for (var radio of response2) {
        if (radio.checked) {
            value2 = parseFloat(radio.value);
            value2 = (5 - value2) + 1
            status_q7 = 1
        }
    }

    val_agreeableness = value1 + value2
    val_agreeableness = val_agreeableness / 2
}

function getConscientious() {
    var response = document.getElementsByName('q8');
    var response2 = document.getElementsByName('q3'); //R

    for (var radio of response) {
        if (radio.checked) {
            value1 = parseFloat(radio.value);
            status_q8 = 1
        }
    }

    for (var radio of response2) {
        if (radio.checked) {
            value2 = parseFloat(radio.value);
            value2 = (5 - value2) + 1
            status_q3 = 1
        }
    }

    val_conscientious = value1 + value2
    val_conscientious = val_conscientious / 2
}

function getNeuroticism() {
    var response = document.getElementsByName('q9');
    var response2 = document.getElementsByName('q4'); //R

    for (var radio of response) {
        if (radio.checked) {
            value1 = parseFloat(radio.value);
            status_q9 = 1
        }
    }

    for (var radio of response2) {
        if (radio.checked) {
            value2 = parseFloat(radio.value);
            value2 = (5 - value2) + 1
            status_q4 = 1
        }
    }

    val_neuroticism = value1 + value2
    val_neuroticism = val_neuroticism / 2
}

function getOpennesToExperience() {
    var response = document.getElementsByName('q10');
    var response2 = document.getElementsByName('q5'); //R

    for (var radio of response) {
        if (radio.checked) {
            value1 = parseFloat(radio.value);
            status_q10 = 1
        }
    }

    for (var radio of response2) {
        if (radio.checked) {
            value2 = parseFloat(radio.value);
            value2 = (5 - value2) + 1
            status_q5 = 1
        }
    }

    val_opennes_to_experience = value1 + value2
    val_opennes_to_experience = val_opennes_to_experience / 2
}

function getAnxietyDisorder() {
    var response = document.getElementsByName('q26');
    var response2 = document.getElementsByName('q27');
    var response3 = document.getElementsByName('q28');
    var response4 = document.getElementsByName('q29');
    var response5 = document.getElementsByName('q30');
    var response6 = document.getElementsByName('q31');
    var response7 = document.getElementsByName('q32');

    var response8 = document.getElementsByName('q33');

    for (var radio of response) {
        if (radio.checked) {
            r1 = parseFloat(radio.value);
            status_q26 = 1
        }
    }

    for (var radio of response2) {
        if (radio.checked) {
            r2 = parseFloat(radio.value);
            status_q27 = 1
        }
    }

    for (var radio of response3) {
        if (radio.checked) {
            r3 = parseFloat(radio.value);
            status_q28 = 1
        }
    }
    for (var radio of response4) {
        if (radio.checked) {
            r4 = parseFloat(radio.value);
            status_q29 = 1
        }
    }
    for (var radio of response5) {
        if (radio.checked) {
            r5 = parseFloat(radio.value);
            status_q30 = 1
        }
    }
    for (var radio of response6) {
        if (radio.checked) {
            r6 = parseFloat(radio.value);
            status_q31 = 1
        }
    }
    for (var radio of response7) {
        if (radio.checked) {
            r7 = parseFloat(radio.value);
            status_q32 = 1
        }
    }
    for (var radio of response8) {
        if (radio.checked) {
            r8 = radio.value
            status_q33 = 1
        }
    }

    val_anxiety_level = r1+r2+r3+r4+r5+r6+r7
    val_has_existing_mental_condition = r8
    
    var existingMentalConditionBox = document.getElementById('q34r1')
    val_the_existing_mental_condition = existingMentalConditionBox.value
}

function save() {
    getPrimaryDetails()
    getExtraversion()
    getAgreeableness()
    getConscientious()
    getNeuroticism()
    getOpennesToExperience()
    getAnxietyDisorder()
    checkEmpty()
}

function checkEmpty() {

    if (status_d1 == 0 || status_d2 == 0 || status_d3 == 0) {
        alert("Please check if you have answered all the demographic details")
        return false
    }
    if (val_is_a_student == "Yes") {
        if (val_name_of_college.trim() == "" || val_course_name.trim() == "" || val_branch.trim() == "" || val_year_of_study.trim() == "") {
            alert("You said that you are a student. Please check if you have filled in the name of the institution, course name, branch and year of study")
            return false
        }
    }
    if (val_is_working == "Yes") {
        if (val_designation.trim() == "" || val_years_of_experience.trim() == "") {
            alert("You said that you are working. Please check if you have filled in your designation and years of experience")
            return false
        }
    }
    if (status_q1 == 0) {
        alert("Please check if you have answered question 1")
        return false
    }
    if (status_q2 == 0) {
        alert("Please check if you have answered question 2")
        return false
    }
    if (status_q3 == 0) {
        alert("Please check if you have answered question 3")
        return false
    }
    if (status_q4 == 0) {
        alert("Please check if you have answered question 4")
        return false
    }
    if (status_q5 == 0) {
        alert("Please check if you have answered question 5")
        return false
    }
    if (status_q6 == 0) {
        alert("Please check if you have answered question 6")
        return false
    }
    if (status_q7 == 0) {
        alert("Please check if you have answered question 7")
        return false
    }
    if (status_q8 == 0) {
        alert("Please check if you have answered question 8")
        return false
    }
    if (status_q9 == 0) {
        alert("Please check if you have answered question 9")
        return false
    }
    if (status_q10 == 0) {
        alert("Please check if you have answered question 10")
        return false
    }
    if (status_q26 == 0 || status_q27 == 0 || status_q28 == 0 || status_q29 == 0 || status_q30 == 0 || status_q31 == 0 || status_q32 == 0 || status_q33 == 0) {
        alert("Please check if you have answered all anxiety disorder assessment questions")
        return false
    }
    if (val_has_existing_mental_condition == "Yes") {
        if (val_the_existing_mental_condition.trim() == "") {
            alert("You said that you have an existing mental condition. Please check if you have filled in your exisiting mental condition")
            return false
        }
    }

    alert('Please wait..')
    uploadData()
}

function uploadData() {
    database.ref('SCOREBOARD/').push({
        name: val_name,
        age: val_age,
        gender: val_gender,
        isAStudent: val_is_a_student,
        nameOfCollege: val_name_of_college,
        isWorking: val_is_working,
        designation: val_designation,
        //nameOfInstitution: val_name_of_institution,
        state: val_state,
        country: val_country,
        extraversion: val_extraversion,
        agreeableness: val_agreeableness,
        conscientious: val_conscientious,
        neuroticism: val_neuroticism,
        openns_to_experience: val_opennes_to_experience,
        anxiety_level: val_anxiety_level,
        hasExistingMentalCondition: val_has_existing_mental_condition,
        theExisitingMentalCondition: val_the_existing_mental_condition

    }, (error) => {
        if (error) {
            alert('failed')
        } else {
            alert('Submitted successfully')
            window.location.replace('thankyou.html')
            //window.history.forward()
        }
    });
}

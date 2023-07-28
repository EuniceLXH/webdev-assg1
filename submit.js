const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const gender = document.getElementById('gender')
const contact = document.getElementById('contact')
const email = document.getElementById('email')
const yes1 = document.getElementById('yes1')
const no1 = document.getElementById('no1')
const school = document.getElementById('school')
const year = document.getElementById('year')
var forward = document.getElementById('forward')
var center = document.getElementById('center')
var defender = document.getElementById('defender')
var goalKeeper = document.getElementById('goalKeeper')
const yes2 = document.getElementById('yes2')
const no2 = document.getElementById('no2')
const yes3 = document.getElementById('yes3')
const no3 = document.getElementById('no3')
const condition = document.getElementById('condition')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstNameValue = firstName.value;
    const genderValue = gender.value;
    const contactValue = contact.value;
    const emailValue = email.value;
    const yes1Value = yes1.checked;
    const no1Value = no1.checked;
    const schoolValue = school.value;
    const yearValue = year.value;
    const forwardValue = forward.checked;
    const centerValue = center.checked;
    const defenderValue = defender.checked;
    const goalKeeperValue = goalKeeper.checked;
    const yes2Value = yes2.checked;
    const no2Value = no2.checked;
    const yes3Value = yes3.checked;
    const no3Value = no3.checked;
    const conditionValue = condition.value;

    localStorage.setItem('first-name', firstNameValue);
    localStorage.setItem('Gen', genderValue);
    localStorage.setItem('Con', contactValue);
    localStorage.setItem('Mail', emailValue);
    localStorage.setItem('Yes1', yes1Value);
    localStorage.setItem('No1', no1Value);
    localStorage.setItem('Sch', schoolValue);
    localStorage.setItem('Yea', yearValue);
    localStorage.setItem('For', forwardValue);
    localStorage.setItem('Cen', centerValue);
    localStorage.setItem('Def', defenderValue);
    localStorage.setItem('GK', goalKeeperValue);
    localStorage.setItem('Yes2', yes2Value);
    localStorage.setItem('No2', no2Value);
    localStorage.setItem('Yes3', yes3Value);
    localStorage.setItem('No3', no3Value);
    localStorage.setItem('MedCon', conditionValue);

    window.location.href = "submission.html";

})
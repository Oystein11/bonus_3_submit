//Basic input
//HTML-linker
const basic_form = document.querySelector ("#basic_form_ID");
const basic_input = document.querySelector ("#basic_input_ID");
const name_list = document.querySelector ("#name_list_ID");

//Liste-funksjonen
function add_name () {
    if (basic_input.value) {
        const new_name = document.createElement ("li");
        new_name.textContent = basic_input.value;
        name_list.appendChild (new_name);
    } else {
        alert ("Legg til et navn først"), console.log ("Legg til et navn først");
    }
}

//Forhindrer siden fra å refreshe
basic_form.addEventListener ("submit", function (event) {
    event.preventDefault ();
    add_name ();
});

//Multi-input
//HTML-linker
const multi_form = document.querySelector ("#multi_form_ID");
const name_input = document.querySelector ("#name_input_ID");
const password_input = document.querySelector ("#password_input_ID");
const address_input = document.querySelector ("#adress_input_ID");
const form_list = document.querySelector ("#form_list_ID");

//Liste-funksjonen
function add_form () {
    if (name_input.value, password_input.value, address_input.value) {
        const add_form = document.createElement ("li");
        add_form.textContent = name_input.value + ", " + password_input. value + ", " + address_input.value;
        form_list.appendChild (add_form);
    } else {
        alert ("Legg inn manglende informasjon"), console.log ("Legg inn manglende informasjon");
    }
}

//Forhindrer siden fra å refreshe
multi_form.addEventListener ("submit", function (event){
    event.preventDefault ();
    add_form ();
});
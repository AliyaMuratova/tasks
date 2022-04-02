
const form = document.querySelector('form');

form.onsubmit = () => {
    let fullName = document.querySelector('input[type=text]');
    let phoneNumber = document.querySelector('input[type=number]');
    let birthDate = document.querySelector('input[type=date]');
    let gender = document.querySelector('input[type=radio]:checked');
    let languages = document.querySelectorAll('input[type=checkbox]:checked');
    let filialBranch = document.querySelector('select')

    let state = {
        items: []
    };

    let name = fullName.value;
    state.items.push(name);
    let number = phoneNumber.value;
    state.items.push(number);
    let birthday = birthDate.value;
    state.items.push(birthday);
    let gend = gender.value;
    state.items.push(gend);
    for (let i = 0; i < languages.length; i++){
        let language = languages[i].value
        state.items.push(language);
    }
    let filial = filialBranch.value;
    state.items.push(filial);

    localStorage.setItem("data", JSON.stringify(state));

    console.log(state)
}

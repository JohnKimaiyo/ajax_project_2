import { brainhttp } from "./brainhttp";

// get button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function () {
    fetchEmployee();
});

let fetchEmployee = () => {
    let http = new brainhttp();
    let url = `${serverURL}/employees`;
    http.get(url, (err, employees) => {
        if (err) throw err;
        let tableRows = '';
        for (let employee of employees) {
            tableRows += `<tr>
        <td>${employee.id}</td>
        <td>${employee.first_name}</td>
        <td>${employee.last_name}</td>
        <td>${employee.email}</td>
        <td>${employee.gender}</td>
        <td>${employee.ip_address}</td>
</tr>
        `
        }
        document.querySelector('#table-body').innerHTML = tableRows
    });
    console.log(users);
}

//POST Button
let postButton = docuemnt.querySelector('#post-btn');
postButton.addEventListener('click', function () {
    let url = `${serverURL}/employees`;
    let employee = {
        first_name: 'john',
        last_name: 'doe',
        email: 'johndoe@gmail.com',
        gender: 'male',
        ip_address: '127.0.0.5'
    };
    let http = new brainhttp();
    http.post(url, employees, (data) => {
        alert(JSON.stringify(data));
        fetchEmployees();
    })

})
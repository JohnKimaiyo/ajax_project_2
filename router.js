const { Router } = require('express');
const router = require('express');
const express = require('express');
const router = express.Router();

// emplaoyee data
let employees = [
    {
        id:'_a',
        fist_name:'john',
        last_name:'wilson',
        email:'john@gmail.com',
        gender:'male',
        ip_address:'127.0.0.1'
    },
    {
        id:'_b',
        fist_name:'janet',
        last_name:'wilson',
        email:'john@gmail.com',
        gender:'male',
        ip_address:'127.0.0.1'
    }
];

// get id
let getID = () =>{
    return '_' + Math.random() .toString(36) .substr(2,9);
}

// get emploayees
router.get('/emplaoyees',(request,response)=>{
    response.json(employees);
});

// post requets
router.post('/employee',(request,response)=>{
let employee = {
    id:getID(),
    first_name:request.body.fist_name,
    last_name:request.body.last_name,
    email:request.body.email,
    gender:request.body.gender,
    ip_address:request.body.ip_address
}
employee.push(employee);
console.log(`POST Request Received at server .. ${new Date().tolocate()}`);
response.json(employee);
});

// put request
router.put('/employess/:id'),(request,response) =>{
    let empID = request.params.id;
    let updateEmployee = {
        id:empID,
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.gender,
        ip_address:request.body.ip_address
    };
    let existingEmployee = employee.find((employee)=>{
        return employee.id === empID;
    });
    employees.splice(employees.indexof(existingEmployee),1,updateEmployee);
    console.log(`PUT Request Received at server .. ${new Date().toLocaleTimeString()}`);
    Response.JSON({msg:'PUT Request is sucees'});
};

// delete request
Router.delete('/employees/id',(request,response)=>{
    let empId = request.params.id;
    employees =employees.filter((employee)=>{
        return employee.id !== empId;
    });
    console.log(`delete Request Recived at server .. ${new Date().toLocaleTimeString()}`);
    response.json({msg:'deleted request is successful'});
});
module.eports = router;
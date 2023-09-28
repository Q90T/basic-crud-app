let studentid = document.getElementById('studentid');
let firstname = document.getElementById('firstname');
let secondname = document.getElementById('secondname');
let birth = document.getElementById('birth');
let degree = document.getElementById('degree');
let submit = document.getElementById('submit');
let mood = 'creat';
let temp;



let datastudent ;
if(localStorage.student!=null){

    datastudent = JSON.parse(localStorage.student)
}
else{
   datastudent = [];
}
//save onclick
submit.onclick = function(){
    let newstudent = {
        studentid:studentid.value,
        firstname:firstname.value,
        secondname:secondname.value,
        birth:birth.value,
        degree:degree.value

    }
    if(studentid.value != '' && firstname.value !='' && degree.value != ''){
       if(mood === 'creat'){
        datastudent.push(newstudent);
        readData();
       
            }
    else{
        datastudent[temp] = newstudent;
        mood = 'creat'
        submit.innerHTML = 'Register';
        readData();
    
    } 
    }
    
   
     
    //save in local storage*
     localStorage.setItem('student', JSON.stringify(datastudent));

    
    clearData();
    readData();
    

}


//clear input
function clearData(){
    studentid.value = '';
    firstname.value = '';
    secondname.value = '';
    birth.value = '';
    degree.value = '';


}


//read
function readData(){
    let table = ''


    for(let i = 0; i < datastudent.length; i++){
        table += `
        <tr>
            <td>${datastudent[i].studentid}</td>                           
            <td>${datastudent[i].firstname}</td>
            <td>${datastudent[i].secondname}</td>
            <td>${datastudent[i].birth}</td>
            <td>${datastudent[i].degree}</td>
            <td><button onclick= "editData(${i})">edit</button></td>
            <td><button onclick="deletedata(${i})">delete</button></td>
        </tr>
    `
        
         
    }
    
    document.getElementById('tbody').innerHTML = table;
    let btndelete = document.getElementById('deleleteAll');
    if(datastudent.length > 0){
        btndelete.innerHTML =`
        <button onclick = "deleteAll ()">delete all(${datastudent.length})</button>
        `

    }
    else{
        btndelete.innerHTML = '';
    }
    datastudent.sort(byId)
    
}
readData()



//delete

function deletedata(i){

    datastudent.splice(i,1)
    localStorage.student = JSON.stringify(datastudent)
    readData()
}
function deleteAll(){
    localStorage.clear()
    datastudent.splice(0)
    readData()
}

//update

function editData(i){
    studentid.value = datastudent[i].studentid;
    firstname.value = datastudent[i].firstname;
    secondname.value = datastudent[i].secondname;
    birth.value = datastudent[i].birth;
    degree.value = datastudent[i].degree;
    submit.innerHTML= 'save';
    mood = 'save';
    temp = i;
    scroll({
        top:0,
        behavior:"smooth"
    })
    
}

//sorting
 

function byId(a, b){
    return parseInt(a.degree)- parseInt(b.degree)

}

 // dark mode them
 function theme(){
    let th= document.body;
    th.classList.toggle("theme")
        
}
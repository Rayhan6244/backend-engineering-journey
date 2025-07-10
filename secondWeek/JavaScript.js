var name = 'Rayhan';
var age = 23;
var commitment = true;

function towhid(username , userage, usercommit){
    return(
        'Name is: ' + username +', Age is: ' + userage + ', Is he commited?(True/False): ' + usercommit
    );
}

console.log(towhid(name, age, commitment));

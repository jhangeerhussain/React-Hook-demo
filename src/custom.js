import {useState} from "react";

function useSalary(){
    const [salary , setSalary] = useState(25000);
    function Increament(){
        setSalary(salary * 1.2)
    }

    return{
        salary ,
        Increament
    }
}

export default useSalary;
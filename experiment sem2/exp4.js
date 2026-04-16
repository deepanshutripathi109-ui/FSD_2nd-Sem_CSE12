function calculateResult(){
    let n=document.querySelector("#subjects").value;
    let total=0;
    for(let i=1;i<=n;i++){
        let marks=parseFloat(prompt("Enter marks for subject",i));
        total=total+marks;
    }
    let avg=total/n;
    let grade;
    let result;
    if(avg>=90){
        grade="A+";
    }else if(avg>=75){
        grade="B";
    }else if(avg>=60){
        grade="C";
    }else{
        grade="F";
    }
    if(avg>=40){
        result="pass";
    }else{
        result="fail";
    }
    document.querySelector(".result").innerHTML=
    "Total Marks : "+total+"<br>"+
    "Average Marks:"+avg.toFixed(2)+"<br>"+
    "Grade: "+grade+"<br>"+
    "Result: "+result;

}
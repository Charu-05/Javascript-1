function marklist(rollno,name,tamil,english,maths,science,social,total,
    result,grade,percent){
   console.log("Rollno: "+rollno)
   console.log("Name: "+name)
   console.log("Tamil  : "+tamil)
   console.log("English: "+english)
   console.log("Maths  : "+maths)
   console.log("Science: "+science)
   console.log("Social : "+social)
   total=(tamil+english+maths+science+social)
   console.log("Total  : "+total)
   result=tamil>=30 && english>=30 && maths>=30 && science>=30 && social>=30
   if(result){
    console.log("Result : Pass")
   }
   else{
    console.log("Result : Fail")
   }
   
grade=total
if(grade>=450){
    console.log("Grade  : O+")    
}
else if(grade>=350 && grade<450){
    console.log("Grade  : A")  
}
else if(grade>=300 && grade<350){
   console.log("Grade   : B")
}
else{
    console.log("Grade  : F")
}
percent=total/5
console.log("Percentage:"+ percent+"%")
}
marklist(10001,"Charu",90,34,97,54,78,"total","result","grade","percent")
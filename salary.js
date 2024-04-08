//confirmation message
const confirm = confirm("")


// Declaration & initialization of variables
let basicSalary = Number(prompt("Enter your basic salary"))
let benefits = Number(prompt("Enter your allowances"))
let totalSalary = (basicSalary + benefits)

// PAYE  monthly calculation
let totalPAYE = totalSalary<=24000?totalPAYE = totalSalary*(0.1/12)
:totalSalary>24000 && totalSalary <=32333?totalPAYE = totalSalary*(0.25/12)
:totalSalary>32333 && totalSalary <=500000?totalPAYE = totalSalary*(0.3/12)
:totalSalary>500000 && totalSalary <=800000?totalPAYE = totalSalary*(0.325/12)
:totalPAYE = totalSalary*(0.35/12)
alert(totalPAYE)

//NHIF calculation
let totalNHIF= totalSalary<599?    totalNHIF = 150 : totalSalary>5999 && totalSalary<7999
?totalNHIF = 300 :totalSalary>7999 && totalSalary<11999?totalNHIF = 400:totalSalary>11999 && totalSalary<14999
? totalNHIF = 500:totalSalary>14999 && totalSalary<19999?totalNHIF = 600:totalSalary>19999 && totalSalary<24999
?totalNHIF = 750:totalSalary>24999 && totalSalary<29999?totalNHIF = 850:totalSalary>29999 && totalSalary<34999
? totalNHIF = 900:totalNHIF = 950;
alert(totalNHIF)

//NSSF calculation


let totalNSSF = totalSalary> 36000 ? totalNSSF = (36000*0.06)*2:totalNSSF = (totalSalary*0.06)*2





let totalhouseLevy = (totalSalary*0.015)*2


let netSalary = totalSalary - (totalPAYE+totalNHIF+totalNSSF)

window.alert(`Total salary is ${totalSalary} & Net salary is ${netSalary}`)


alert(`${totalSalary}, ${totalPAYE}, ${totalNHIF}, ${totalNSSF}, ${netSalary}`)


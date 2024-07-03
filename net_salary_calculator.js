// 


function calculateNetSalary(basicSalary, benefits) {
    // Items tax rates and deductions
    const TAX_THRESHOLD = 24000;    // Taxable income threshold
    const TAX_RATE_LOW = 0.1;       // 10% tax rate for income up to TAX_THRESHOLD
    const TAX_RATE_HIGH = 0.25;      // 25% tax rate for income above TAX_THRESHOLD
    const NHIF_PERCENTAGE = 0.015;   // 1.5% NHIF deduction
    const NSSF_PERCENTAGE = 0.06;    // 6% NSSF deduction
    
    // Let's calculate gross salary
    let grossSalary = basicSalary + benefits;
    
    // lets's calculate taxable income
    let taxableIncome = grossSalary > TAX_THRESHOLD ? (grossSalary - TAX_THRESHOLD) : 0;
    
    // Calculate payee (tax)
    let payee = 0;
    if (taxableIncome <= TAX_THRESHOLD) {
        payee = taxableIncome * TAX_RATE_LOW;
    } else {
        payee = TAX_THRESHOLD * TAX_RATE_LOW + (taxableIncome - TAX_THRESHOLD) * TAX_RATE_HIGH;
    }
    
    // NHIF deduction
    let nhifDeduction = grossSalary * NHIF_PERCENTAGE;
    
    //NSSF deduction
    let nssfDeduction = grossSalary * NSSF_PERCENTAGE;
    
    // Calculate net salary
    let netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;
    
    // Print the output
    console.log(`Basic Salary: KES ${basicSalary}`);
    console.log(`Benefits: KES ${benefits}`);
    console.log(`Gross Salary: KES ${grossSalary}`);
    console.log(`Payee (Tax): KES ${payee}`);
    console.log(`NHIF Deduction: KES ${nhifDeduction}`);
    console.log(`NSSF Deduction: KES ${nssfDeduction}`);
    console.log(`Net Salary: KES ${netSalary}`);
    
    return netSalary;
}


let basicSalary = 1000000;  
let benefits = 20000;     
calculateNetSalary(basicSalary, benefits);

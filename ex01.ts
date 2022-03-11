function calculateSalaryPercentage(currentSalary: number, percentage: number){
    return currentSalary * (percentage / 100);
}

const salary = 6000;
const newSalary = salary + calculateSalaryPercentage(salary, 15);
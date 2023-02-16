"use script"


function topSalary(salaries) {
    let mx = 0;
    let ans = null;
    for(const [name, salary] of Object.entries(salaries)) {
        if (mx < salary) {
            mx = salary;
            ans = name;
        }
    }
    return ans;
}
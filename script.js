const companies = [
    { name: "Apple", income: [10000, 12000, 500], expenditure: 23000 },
    { name: "Microsoft", income: [10000, 12000, 1500], expenditure: 17000 },
    { name: "Google", income: [15000, 20000, 4000], expenditure: 7000 },
    { name: "SpaceX", income: [150000, 62000, 2000], expenditure: 99000 },
    { name: "GM motors", income: [15000, 20000, 4000], expenditure: 100 },
];

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function findCompanyWithMaxIncome(companies) {
    let maxIncomeCompany = companies[0];
    let maxIncome = sum(maxIncomeCompany.income);

    for (let company of companies) {
        let totalIncome = sum(company.income);
        if (totalIncome > maxIncome) {
            maxIncome = totalIncome;
            maxIncomeCompany = company;
        }
    }

    return maxIncomeCompany;
}

function findCompanyWithMinIncome(companies) {
    let minIncomeCompany = companies[0];
    let minIncome = sum(minIncomeCompany.income);

    for (let company of companies) {
        let totalIncome = sum(company.income);
        if (totalIncome < minIncome) {
            minIncome = totalIncome;
            minIncomeCompany = company;
        }
    }

    return minIncomeCompany;
}

function addTotalIncome(companies) {
    for (let company of companies) {
        company.total = sum(company.income);
    }
}

addTotalIncome(companies);
console.log('Companies with total income:', companies);

const maxIncomeCompany = findCompanyWithMaxIncome(companies);
console.log('Company with max income:', maxIncomeCompany);

const minIncomeCompany = findCompanyWithMinIncome(companies);
console.log('Company with min income:', minIncomeCompany);
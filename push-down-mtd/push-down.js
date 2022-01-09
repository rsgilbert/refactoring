// push down method
class Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class EmployeeParty extends Party {
}

class DepartmentParty extends Party {
}



module.exports = {
    EmployeeParty,
    DepartmentParty,
    Party
}

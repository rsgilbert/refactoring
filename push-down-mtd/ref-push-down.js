// pull up method
class Party {

}

class EmployeeParty extends Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class DepartmentParty extends Party {
}



module.exports = {
    EmployeeParty,
    DepartmentParty,
    Party
}

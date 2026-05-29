interface Person {
    name: string;
    dept: string;
}

function groupByProperty(array: Person[]):Record<string, Person[]>
{
    return array.reduce((accumulator, currentValue) => {
        if(accumulator[currentValue.dept] === undefined)
        {
                accumulator[currentValue.dept] = [];
        }
        accumulator[currentValue.dept].push(currentValue);
        return accumulator;

    }, {} as Record<string, Person[]>)
}

function runGroupByProperty() {

    const dataSet = [
  { name: 'Alice', dept: 'Eng' },
  { name: 'Bob', dept: 'HR' },
  { name: 'Carol', dept: 'Eng' },
  { name: 'David', dept: 'Finance' },
  { name: 'Eva', dept: 'Marketing' },
  { name: 'Frank', dept: 'Sales' },
  { name: 'Grace', dept: 'HR' },
  { name: 'Henry', dept: 'Eng' },
  { name: 'Ivy', dept: 'Support' },
  { name: 'Jack', dept: 'Finance' },
  { name: 'Kate', dept: 'Marketing' },
  { name: 'Leo', dept: 'Sales' },
  { name: 'Mia', dept: 'Eng' },
  { name: 'Nathan', dept: 'Support' },
  { name: 'Olivia', dept: 'HR' },
  { name: 'Paul', dept: 'Finance' },
  { name: 'Quinn', dept: 'Marketing' },
  { name: 'Ryan', dept: 'Sales' },
  { name: 'Sophia', dept: 'Eng' },
  { name: 'Tom', dept: 'Support' }
]
       
      Object.entries(groupByProperty(dataSet)).forEach(([key, value]) => {
    console.log(`${key}: ${value.map(p => JSON.stringify(p)).join(', ')}`);
});
}

runGroupByProperty();
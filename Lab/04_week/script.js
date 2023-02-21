function Run()
{
    // make a JSON object with a sub-object
    var myObject = 
    {
        myValue: 'some text',
        subObject: 
        {
            deeperValue1: 6,
            deeperValue2: "more stuff"
        }
    };

    // log it to the console
    console.log(myObject);
}
function Run2()
{
    // create three different objects by calling the BuildObject function with different parameters
    var person1 = BuildObject('dan', 39, 4.0);
    var person2 = BuildObject('edgar', 25, 2.0);
    var person3 = BuildObject('paul', 55, 3.9);

    // print them out
    console.log(person1);
    console.log(person2);
    console.log(person3);
}

// This function takes three parameters, makes a JSON object having those values, and returns it
function BuildObject(value1, value2, value3)
{
    // build the object using the values passed in
    var returnObject = 
    {
        name: value1,
        age: value2,
        gpa: value3
    }

    // return the object that was just build
    return returnObject;
}

function Run3()
{
    // make three people
    var person1 = BuildObject('dan', 39, 4.0);
    var person2 = BuildObject('edgar', 25, 2.0);
    var person3 = BuildObject('paul', 55, 3.9);

    // put the three people into an array
    var students = [person1, person2, person3];

    // send the array into our function which computes the worst student.
    // assign the result of the function to a variable.
    var worstStudent = FindWorstStudent(students);

    // print out the worst student that we found.
    console.log("The worst student has been found. It is: ");
    console.log(worstStudent);
}
// This function takes an array of objects and returns the one with the lowest GPA
function FindWorstStudent(listOfStudents)
{
    // this variable keeps track of the current worst student. 
    var worstStudent;

    // loop through each of the students in the array
    listOfStudents.forEach(
    
        // The variable element gets set to be each item in the array,
        // in a loop through all items in the array.
        // For each record in the array, do this stuff.
        element => 
        {
            // When we are on the first item in the array, worstStudent will be null
            // since it has not been set yet. Set it to be the first item in the list. 
            // When we haven't seen any other students, the first one is the current worst one.
            if (worstStudent == null)
            {
                worstStudent = element;
            }

            // when worstStudent is not null, it means that we are on a record after the first one, so compare.
            // if the GPA of the current one is lower than the GPA of the current worst one, 
            // set the worst one to be this one
            else
            {
                if (element.gpa < worstStudent.gpa)
                {
                    worstStudent = element;
                }
            }
        }
    );

    return worstStudent;
}
function Run4()
{
    // theJSON is a variable already created since it is loaded via a script tag in the HTML page.
    console.log(theJSON);

    // get the array of people from the JSON object's data property which contains the array
    var students = theJSON.data;

    // get the worst student
    var worstStudent = FindWorstStudent(students);

    // print it out
    console.log("The worst student has been found. It is: ");
    console.log(worstStudent);
}


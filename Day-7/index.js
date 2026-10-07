/**
 * 
 * 
 * 
 * 
 * functions
 * first class function
 * parameters
 * return 
 * FEC
 * 
 * Callback:
 * 
 * 
 * 
 * anonymous function
 * -------------------
 * 
 * A function which does not have a function name is known as a anonymous function
 * 
 * it can be access by the passing as a argument and store as in varible
 * 
 * Sy:-
 * ---
 *       function ([parameters]){
 * //statements
 * [return ]
 * 
 * }
 * 
 * 
 */



function x(Callback) {
    console.log("Java script is awesome")
     return  Callback(10,20);

}



x(

    function (a, b) {
        console.log(a + b)
        return "React js is awesome"
    }

)












 // to find the length of array
 function array_length()
 {
     var arr=['hello', 'world', 'specbee'];
     var len=arr.length;            
     document.getElementById('len').innerHTML=len;
}
// end//


 // array prototype
 function first() {
    var name=['shruthi','maithri','kashyap','nachiketh'];
    if(!Array.prototype.first) {
        Array.prototype.first= function() {
            return this[0];
        }
    }
    document.getElementById('apf').innerHTML=name.first();
}
//end of file//



// array from  //
function from(){
    var val=(Array.from('shruthi'));
    document.getElementById('af').innerHTML=val;
}
// end



// is array//
function isarray(){
     document.getElementById('isa').innerHTML=Array.isArray(['shruthi']);
}
// end


// arrayof
function arrayof(){
    document.getElementById('aof').innerHTML=Array.of(1,2,3,4);
}
// end



// array prototype contact
function concat(){
    var array1 = ['s', 'h', 'r'];
    var array2 = ['u', 't', 'h'];
    var val=array1.concat(array2);
    document.getElementById('apc').innerHTML=val;
}
// end


// array copywithin
function copy(){
    var array1 = [1, 2, 3, 4, 5];
    var val=array1.copyWithin(0, 3, 4);
    document.getElementById('acw').innerHTML=val;
}
// end


// array prototype entries
function entries(){
    var array1 = ['a', 'b', 'c'];
    var iterator1 = array1.entries();
    var val=(iterator1.next().value);
    document.getElementById('ape').innerHTML=val;
}
// end


// array prototype every
function every(){
function isBelowThreshold(currentValue) {
    return currentValue < 60;
  }
  
  var array1 = [1, 30, 39, 29, 10,47,54,59, 13];
  var val=(array1.every(isBelowThreshold));
  document.getElementById('ae').innerHTML=val;
}
// end



// aray fill
function fill(){
    var array1 = [1, 2, 3, 4];
    var val=(array1.fill(0, 2, 4));
    document.getElementById('fi').innerHTML=val;
}
// end


// Array prototype filter
function filter(){
    var words = ['spray', 'limit', 'elite', 'shruthi', 'Ashwija', 'Maithri'];
    const result = words.filter(word => word.length > 6);
    var val=(result);
    document.getElementById('pf').innerHTML=val;
}
// end



// Array find
function find(){
    var array1 = [5, 12, 8, 130, 44];
    var found = array1.find(function(element) {
    return element > 10;
});
document.getElementById('find').innerHTML=found;
}
// end


// Array findindex
function findindex(){
    var array1 = [5, 12, 8, 130, 44];
    function findFirstLargeNumber(element) {
    return element >13;
}
    var val=(array1.findIndex(findFirstLargeNumber));
    document.getElementById('findex').innerHTML=val;
}
// end



// Array.foreach
function foreach(){
    var array1 = ['Siddesh', 'Maithri', 'Shruthi'];
    array1.forEach(function(element) {
        document.getElementById('feach').innerHTML+=element;
    });
  }
// end


// Array.includes
function includes(){
    var names = ['Sahana', 'Akshay', 'Anush','Neslee','Kiran'];
    var val=(names.includes('Mithun'));
    document.getElementById('ain').innerHTML=val;
}
// end


// Array indexof
function indexof(){
    var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    var val=beasts.indexOf('bison', 2);
    document.getElementById('iof').innerHTML=val;
}
// end
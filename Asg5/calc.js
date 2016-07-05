window.onload = function(){
    var op1
    var op2
    var op;

    setNumber = function(arg){
      document.getElementById('screen').value+= arg;
    }

    setOperator = function(arg){
      op=arg;
      op1=Number(document.getElementById('screen').value);
    //  document.getElementById('screen').value += " " + arg + " ";
      //window.alert(op1);
      clears1();
    }

    clears1 = function(){
      document.getElementById('screen').value = "";
    }

    calc = function(){

      var ans;
      op2=Number(document.getElementById('screen').value);

     switch(op){
        case "*" :
        ans = op1 * op2;
        break;

        case "/" :
        ans= op1 / op2;
        break;

        case "+" :
        ans = op1 + op2;
        break;

        case "-" :
        ans = op1 - op2;
        break;
      }
      document.getElementById('screen').value = ans;
      console.log(document.getElementById("screen").value);
    }

}

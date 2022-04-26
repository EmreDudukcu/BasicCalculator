var FirstNum = 0;
var LastSign = "";

function AddNumber(Value){
    var Screen = document.getElementById("Screen");
    if(Screen !== undefined){
        if(Screen !== null){
            if(Screen.value==="0"||Screen.value === "/"||Screen.value === "-"||Screen.value === "x"||Screen.value === "+"){
                Screen.value = Value;
            }
            else{
                Screen.value += Value;
            }
        }
    }
}

function AddSign(Sign){
    var Screen = document.getElementById("Screen");
    if(Screen !== undefined){
        if(Screen !== null){
            if(LastSign !==""){
                if(((Screen.value.indexOf('x') > -1)||(Screen.value.indexOf('+') > -1)||(Screen.value.indexOf('-') > -1)||(Screen.value.indexOf('/') > -1))&&(Screen.value.length < 2)){
                    Screen.value = Sign; 
                    LastSign = Sign; 
                }
                else{
                    Process();
                    Screen.value = Sign;
                    LastSign = Sign;
                }
                
            }
            else{
                if(Screen.value !== ""){
                    if(((Screen.value.indexOf('x') > -1)||(Screen.value.indexOf('+') > -1)||(Screen.value.indexOf('-') > -1)||(Screen.value.indexOf('/') > -1))&&(Screen.value.length < 2)){
                        Screen.value = Sign; 
                        LastSign = Sign;
                    }
                    else{
                        FirstNum = Number(Screen.value);
                        Screen.value = Sign;
                        LastSign = Sign;
                    }                
                }
            }
        }
    }
}

function Equal(){
    var Screen = document.getElementById("Screen");
    if(Screen !== undefined){
        if(Screen !== null){
            var SecondNum = Number(Screen.value);
            if(LastSign === "/"){
                Screen.value = FirstNum/SecondNum;
            }
            else if(LastSign === "x"){
                Screen.value = FirstNum*SecondNum;
            } 
            else if(LastSign === "-"){
                 Screen.value = FirstNum-SecondNum;
            }
            else{
                Screen.value = FirstNum+SecondNum;
            }
            LastSign = "";
        }
    }    
}

function Process(){
    var Screen = document.getElementById("Screen");
    if(Screen !== undefined){
        if(Screen !== null){
            var SecondNum = Number(Screen.value);
            if(LastSign === "/"){
                FirstNum = FirstNum/SecondNum;
            }
            else if(LastSign === "x"){
                FirstNum = FirstNum*SecondNum;
            } 
            else if(LastSign === "-"){
                FirstNum = FirstNum-SecondNum;
            }
            else{
                FirstNum = FirstNum+SecondNum;
            }
        }
    }    
}

function Clear(){
    var Screen = document.getElementById("Screen");
    if(Screen !== undefined){
        if(Screen !== null){
            Screen.value = "0";
            FirstNum = "0";
            LastSign = "";
        }
    }   
}

function Dot(){
    var Screen = document.getElementById("Screen");
    if(Screen !== undefined){
        if(Screen !== null){
            var CheckDot = Screen.value.indexOf(".");
            if(CheckDot > -1){
                return;
            }
            else{
                Screen.value += ".";
            }
        }
    }  
}

function Negative(){
    var Screen = document.getElementById("Screen");
    if(Screen !== undefined){
        if(Screen !== null){
            var Neg = Number(Screen.value);
            Screen.value = -1*Neg;
        }
    }   
}

function DeleteOneChar(){
    var Screen = document.getElementById("Screen");
    if(Screen !== undefined){
        if(Screen !== null){
            var Value = Screen.value;
            var DeletedValue = Value.substring(0,Value.length-1);
            if(DeletedValue === ""){
                Screen.value = "0";
            }
            else{
                Screen.value = DeletedValue;
            }
        }
    }
}

function DeleteTwoChar(){
    var Screen = document.getElementById("Screen");
    if(Screen !== undefined){
        if(Screen !== null){
            var Value = Screen.value;
            var DeletedValue = Value.substring(0,Value.length-2);
            if(DeletedValue === ""){
                Screen.value = "0";
            }
            else{
                Screen.value = DeletedValue;
            }
        }
    }
}
    
function calc()
            {
                let num1 = parseInt(document.getElementById('number1').value);
                let num2 = parseInt(document.getElementById('number2').value);
                
                let oper = document.getElementById('operators').value;
                
                if(oper === '+')
                {
                    document.getElementById('result').value = num1+num2;
                }
                
                if(oper === '-')
                {
                    document.getElementById('result').value = num1-num2;
                }
                
                if(oper === '/')
                {
                    document.getElementById('result').value = num1/num2;
                }
                
                if(oper === 'X')
                {
                    document.getElementById('result').value = num1*num2;
                }
            }
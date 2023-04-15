document.addEventListener("DOMContentLoaded",function(){



	//---mouse clike---
	const display = document.getElementById('display');
	const buttons = document.querySelectorAll('.calculator-button');
	let operations="";
	let i=0;

	buttons.forEach(button => {
	button.addEventListener('click', function() {
		const buttonText = this.textContent;
		if (buttonText === 'AC') {
			display.value = '';
		} else if (buttonText === 'DEL') {
			display.value = display.value.slice(0, -1);
		} else if (buttonText === 'History') {
			window.alert(operations);
		}
		else if (buttonText === '=') {
    		hasel();
		}else{
			display.value +=buttonText;
		}
	  });
	});
	
	//---key done---
	document.addEventListener('keydown', function(event) {
		const key = event.key;
		if (key >= '0' && key <= '9') {
			display.value += key;
		} else if (key === '+' || key === '-' || key === '*' || key === '/'|| key === '%') {
			display.value += key;
		} else if (key === '.' && !display.value.includes('.')) {
			display.value += key;
		} else if (key === 'Backspace') {
			display.value = display.value.slice(0, -1);
		} else if (event.key === 'h' || event.key === 'H' ) {
			window.alert(operations);
		} else if (key === 'Escape') {
			display.value = '';
		}else if (key === 'Enter') {
			hasel();
		}
	});


	//---functions---
	function hasel(){

		let expression = display.value;
    	if ((expression.includes('++') || expression.includes('--') || expression.includes('××') || expression.includes('--') || expression.includes('÷÷') || expression.includes('**') || expression.includes('//'))) {
            alert("false entry!!\nMultiple symbols together like ++ or ÷÷ are not defined.");
    	} else {
            let expression = display.value;
            operations +=  ` {${i+=1}}_  `+(expression) + "=";
            while ((expression.includes('÷') | expression.includes('×'))) {
                expression = expression.replace('÷', '/').replace('×', '*');
            }
		
		    try {
            display.value = eval(expression);
		    } catch (error) {
  		    if (error instanceof SyntaxError) {
                alert('Syntax Error: ' + error.message);
			    operations="";
  		    } else {
    		    alert('Unexpected Error: ' + error.message);
			    operations="";

  		    }

		    }
		operations +=display.value+"\n\n";


	};
	}




});

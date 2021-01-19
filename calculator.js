window.addEventListener("load",()=>{
	var number_button=document.querySelectorAll(".box");
	var operator_button=document.querySelectorAll('.operator-box');
	var display=document.querySelector(".result-screen");
	var equal_button=document.querySelector(".equal");
	var clear_button=document.querySelector(".clear");

	// number button click or event
	number_button.forEach((item)=>{
		item.addEventListener('click',(event)=>{
			display.value+=event.target.innerHTML;
		});

	});

	// operator sign click or event

	operator_button.forEach((item)=>{
		item.addEventListener('click',(event)=>{
			display.value+=event.target.innerHTML;
		});

	});


	// clear function event
	clear_button.addEventListener('click',()=>{
		display.value='';

	});

	// equal function event
	equal_button.addEventListener('click',()=>{
		if(eval(display.value)===Infinity){
			display.value="Infinite value...................";
		}
		else if(eval(display.value)===undefined){
			display.value='Error!';
			if(display.value==='Error!'){
				display.addEventListener('mouseover',()=>{
					setTimeout(()=>{
						display.value='';
						display.style.color='white';
					},300);
				})
			}

			display.style.color='red';
			clear_button.addEventListener('click',()=>{
		display.style.color='white';
	


	});
		}
			else{
	display.value=eval(display.value);
}
		
	});



});
const messages = [['Answer1',true],['Answer2',true],['Answer3',true],['Answer4',true]];
let jump, xCount;
jump = -1;
xCount = 0;
const pushText = document.getElementById('out');
const x = document.getElementById('x');
const roll = document.getElementById('roll');
const inputOne = document.getElementById('inputOne');

autoRoll();

function autoRoll(){
	setInterval(()=>{
		
		jump += 1;
		if(jump >= messages.length){
			jump = 0;
		}
		while(!messages[jump][1] && xCount<messages.length){
			jump += 1;
			if(jump >= messages.length){
				jump = 0;
			}
		}
		if(messages[jump][1] && xCount < messages.length)
			roll.innerHTML = messages[jump][0];
		else
			roll.innerHTML = ''
		
	}, 1500);
}

console.log (messages);

function render(){
	let strText = '';
	let strX = '';
	for (let i = 0; i < messages.length; i++) {
		if(messages[i][1] == true)
		{
			strX += ' ' + '<br>';
			strText += ' ' + messages[i][0] + '<br>';
		}
		else
		{
			strText += ' ' + messages[i][0] + '<br>';
			strX += 'X' + '<br>';
		}
	}
	
	pushText.innerHTML = strText;
	x.innerHTML = strX;
}

render();

function pushOne(){
	if(inputOne.value.length != 0)
	{
		let newMess = [inputOne.value, true];
		messages.push(newMess);
	}
	render();
}

function setX(){
	messages[jump][1] = false;
	xCount += 1;
	render();
}
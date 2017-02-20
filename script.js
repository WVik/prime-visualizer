
var num1;

function execute(){
$('.container').remove();
var num = document.forms[0].elements[0].value;
var container = document.createElement('div');
num1=num;
container.className = 'container';
document.body.appendChild(container);
$('.container').css("height", Math.sqrt(num)*7+'px');

$('.container').css("width",Math.sqrt(num)*7 + 'px');

draw();
}

function draw(){

for(var i=1;i<=num1;i++){
	var newid = document.createElement('div');
newid.className = 'small-box';
newid.id = i;
newid.title=i;
if(isPrime(i)){
	newid.className = 'small-box-red';
  }
document.querySelector(".container").appendChild(newid);	
}

}

function isPrime(i){
	if (i==1)
		return false;
	for(var j=2;j<=i/2;j++){
      
 
        if(i==2 || i==3 || i==5)
        	{return true;}

         if(i%j==0){
         	return false;
         }
      

	}
	return true;
}


document.querySelector('.small-box').hover(function(){
	$(this).tooltip(this.title);
})

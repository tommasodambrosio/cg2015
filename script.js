var i;
var s;
var comma;
var matrix_mul=new Array;
for (i = 1; i <= 10;  i +=1) {
  matrix_mul[i]=new Array;
  s='';
  for (j=1; j <= 10; j++){
  	matrix_mul[i][j]=j*i;
  	if (j<10)
  		comma=matrix_mul[i][j]+', ';
  	else
  		comma=matrix_mul[i][j];
  	s+='   '+comma;
  }
  console.log(s)
 
}
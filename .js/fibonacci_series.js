//PROBLEM STATEMENT
/*Suppose in a Class, the Teacher asked students of roll number 1 to write 0 and roll number 2 to write 1 on the blackboard and asked for the rest of the students, to write the summation of your previous two students’. The series written on the board will look like 0,1,1,2,3,5,8,……….

The teacher then told the students, this series is known as the Fibonacci series. It can be represented by the below equation

 Fn = Fn-1 + Fn-2
Where F0=1 and F1=1. The Fibonacci numbers are the numbers in the following integer sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation

Fn = Fn-1 + Fn-2 with seed values F0 = 0 and F1 = 1
Examples: 

Input : 5 
Output : 8

Input :8
Output :34
As the first Fibonacci number is 0 and the second is 1. Also, we know that the nth Fibonacci number is the summation of n-1 and n-2 term.
So, to get the nth Fibonacci term we can follow
fib(1)=0
fib(2)=1
fib(3)=fib(2)+fib(1)
fib(4)=fib(3)+fib(2)
….
fib(n)=fib(n-1)+fib(n-2)*/

//SOLUTION------------------------------------------------------------------------------------------------
<script type = "text/javascript">
function fibonacci(num)
{
	var num1=0;
	var num2=1;
	var sum;
	var i=0;
	for (i = 0; i < num; i++)
	{
		sum=num1+num2;
		num1=num2;
		num2=sum;
	}
	return num2;
}

document.write("Fibonacci(5): "+fibonacci(5)+"<br>");
document.write("Fibonacci(8): "+fibonacci(8)+"<br>");
</script>

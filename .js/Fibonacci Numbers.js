		let fibonacci_numbers = function (n) 
		{
		  if (n===1) 
		  {
			return [0, 1];
		  } 
		  else 
		  {
			let x = fibonacci_numbers(n - 1);
			x.push(x[x.length - 1] + x[x.length - 2]);
			return x;
		  }
		};

		 console.log(fibonacci_numbers(10));
		 
		// Output : [0,1,1,2,3,5,8,13,21,34,55]

// Toggle Nav JS

	var navTop = document.querySelector('.nav-top');
	
	document.querySelector('.nav-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (navTop.getAttribute('data-state') == 'expanded'){
			
			navTop.setAttribute('data-state', 'collapsed');
		  this.setAttribute('data-state', 'inactive');
		}else{
		
			navTop.setAttribute('data-state', 'expanded');
	    this.setAttribute('data-state', 'active');
		}
	});
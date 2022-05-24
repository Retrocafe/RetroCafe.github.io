window.onscroll = () =>{
	
   if(window.scrollY > 0){document.querySelector('.banner').classList.add('active');
					  }else{
						  document.querySelector('.banner').classList.remove('active');
					  }		
}


function $( cssStr ){
			var obj = document.querySelectorAll( cssStr );
			if( obj.length == 1 ){
				return obj[0];
			}else{
				return obj;
			}
		}
$(function() {

	var draggable=$('.tag_shape').draggabilly();


	function listener() {
		var draggie = $(this).data('draggabilly');
		var tag_line = $(draggie.element).prev('.tag_line')

		var x = draggie.position.x+90 /*加上标签宽度的一半*/
		var y = draggie.position.y+98 /*加上标签高度的*/

		var a = Math.pow(x,2) + Math.pow(y,2)
		var z = Math.sqrt(a)

		
		var zdeg = Math.asin(x/z)*180/Math.PI  /*求角度*/

		if(y>0){
			zdeg = Math.acos(x/z)*180/Math.PI+90
		}

		tag_line.css({'transform':'rotate(' + zdeg + 'deg)',
					     'height':z
					  })

		console.log( x,y,z,zdeg);
	}

	draggable.on( 'dragMove', listener );


});
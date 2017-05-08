/*初始化页面*/
$(function(){
    $('#fullpage_cont').fullpage({
       sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent'],
       anchors: ['page1', 'page2', 'page3', 'page4'],
       menu:'#menu',
       controlArrowColor:'#0ad',
       loopHorizontal:false,
       /* navigation:'true',
       navigationPosition:'right',
       navigationTooltips:['首页','基本资料','专业技能','自我评价'],*/
       slidesNavigation:true,
       afterLoad: function(link,index){
           switch(index){
           	  case 1:
           	    move('.page1 h1').set('margin-left','4%').end();
           	    move('.page1 p').set('margin-left','4%').end();
           	    break;
           	  case 2:
                move('#first').rotate(360).end(function(){
                   move('#second').rotate(360).end(function(){
                      move('#third').rotate(360).end(function(){
                         move('#fourth').rotate(360).end(function(){
                           move('.information h4.i1').scale(1.2).end();
                           move('.information h4.i2').scale(1.2).end();
                           move('.information h4.i3').scale(1.2).end();
                           move('.information h4.i4').scale(1.2).end();
                         });
                      });
                   });
                });
           	    break;
           	  case 3:
           	    break;
           	  case 4:
                $('.evaluation>h1').show('slow',function(){
                   $('.evaluation p:eq(0)').show('slow',function(){
                       $('.evaluation p:eq(1)').show('slow',function(){
                          $('.evaluation p:eq(2)').show('slow');
                        });
                   });
                });
           	    break;
           	  default:
           	    break;
           }
       },
       onLeave: function(link,index){
           switch(index){
           	  case 1:
           	    move('.page1 h1').set('margin-left','-2000px').end();
           	    move('.page1 p').set('margin-left','2000px').end();
           	    break;
           	  case 2:
                 move('#first').rotate(-360).end();
                 move('#second').rotate(-360).end();
                 move('#third').rotate(-360).end();
                 move('#fourth').rotate(-360).end();
                 move('.information h4.i1').scale(1).end();
                 move('.information h4.i2').scale(1).end();
                 move('.information h4.i3').scale(1).end();
                 move('.information h4.i4').scale(1).end();
           	    break;
           	  case 3:
           	    break;
           	  case 4:
                $('.evaluation>h1').hide();
                $('.evaluation p').hide();
           	    break;
           	  default:
           	    break;
           }
       },
       afterRender:function(){
       	   move('.page1 h1').set('margin-left','4%').end();
           move('.page1 p').set('margin-left','4%').end();
       }
    });
});

/*$(function(){
	$('#menu ul li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	});
})*/

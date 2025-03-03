/***********************************************/
/************ MSO faux absolute CODE *******/
/***********************************************/
(function($){
 var generateCodeBegin,generatePreview,imgUrl,frameText,frameColor,frameBgColor,frameFontFamily,frameFontSize,frameTextAlign,frameLeftPosition,emailWidth,frameWidth,frameTopPosition,frameTbPadding,frameLrPadding;

 function updateButton(){ 
    imgUrl = $('#imgUrl').val();
    emailWidth = $('#emailWidth').val();
    frameWidth = $('#frameWidth').val();
    frameText = $('#frameText').val();
    frameColor = $('#frameColor').val();
    frameBgColor = $('#frameBgColor').val();
    frameFontFamily = $('#frameFontFamily').val();
    frameFontSize = $('#frameFontSize').val();
    frameTopPosition = $('#frameTopPosition').val();
    frameTbPadding = $('#frameTbPadding').val();
    frameLrPadding = $('#frameLrPadding').val();
    frameTextAlign =$('#frameTextAlign').val();
    if($('#btnBgColor').is(':checked')){
      $('#bgColorInput').show();
      frameBgColor = 'background-color:'+frameBgColor+'';
    }else{
      $('#bgColorInput').hide();
      frameBgColor = '';
    } 
    
        generatePreview ='<span style="mso-element-wrap:none;mso-element-left:center;font-size:0;"></span><div style="max-height:'+frameTopPosition+'px;max-width:'+emailWidth+'px; mso-element-wrap:no-wrap-beside;mso-element-left:center;margin: 0 auto;"><img src="'+imgUrl+'" alt="" width="'+emailWidth+'" border="0" style="width:100%;max-width:'+emailWidth+'px;display:block;border:0;margin:0 auto;"></div><div style="mso-element-frame-width:'+frameWidth+'px;mso-element-wrap:no-wrap-beside; mso-element-left:center;mso-margin-top-alt:'+frameTopPosition+'px;max-width:'+frameWidth+'px;margin:0 auto;font-family: '+frameFontFamily+';font-size:'+frameFontSize+'px;line-height:1.5;mso-line-height-alt:150%; color:'+frameColor+';'+frameBgColor+';padding:'+frameTbPadding+'px '+frameLrPadding+'px;text-align:'+frameTextAlign+';display:block;position:relative;opacity:0.999"><!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center" style="font-family: '+frameFontFamily+';font-size:'+frameFontSize+'px;line-height:1.5;mso-line-height-alt:150%; color:'+frameColor+';padding:'+frameTbPadding+'px '+frameLrPadding+'px;text-align:'+frameTextAlign+'; '+frameBgColor+'"><![endif]--><p style="margin:0">'+frameText+'</p><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></div>';
        generateCodeBegin='&lt;span style=&quot;mso-element-wrap:none;mso-element-left:center;font-size:0;&quot;&gt;&lt;/span&gt;&lt;div style=&quot;max-height:'+frameTopPosition+'px;max-width:'+emailWidth+'px; mso-element-wrap:no-wrap-beside;mso-element-left:center;margin: 0 auto;&quot;&gt;&lt;img src=&quot;'+imgUrl+'&quot; alt=&quot;&quot; width=&quot;'+emailWidth+'&quot; border=&quot;0&quot; style=&quot;width:100%;max-width:'+emailWidth+'px;display:block;border:0;margin:0 auto;&quot;&gt;&lt;/div&gt;&lt;div style=&quot;mso-element-frame-width:'+frameWidth+'px;mso-element-wrap:no-wrap-beside; mso-element-left:center;mso-margin-top-alt:'+frameTopPosition+'px;max-width:'+frameWidth+'px;margin:0 auto;font-family: '+frameFontFamily+';font-size:'+frameFontSize+'px;line-height:1.5;mso-line-height-alt:150%; color:'+frameColor+';'+frameBgColor+';padding:'+frameTbPadding+'px '+frameLrPadding+'px;text-align:'+frameTextAlign+';display:block;position:relative;opacity:0.999&quot;&gt;&lt;!--[if (gte mso 9)|(IE)]&gt;&lt;table role=&quot;presentation&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot;&gt;&lt;tr&gt;&lt;td align=&quot;center&quot; style=&quot;font-family: '+frameFontFamily+';font-size:'+frameFontSize+'px;line-height:1.5;mso-line-height-alt:150%; color:'+frameColor+';padding:'+frameTbPadding+'px '+frameLrPadding+'px;text-align:'+frameTextAlign+'; '+frameBgColor+'&quot;&gt;&lt;![endif]--&gt;&lt;p style=&quot;margin:0&quot;&gt;'+frameText+'&lt;/p&gt;&lt;!--[if (gte mso 9)|(IE)]&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;![endif]--&gt;&lt;/div&gt;';
  
  $('#preview').html(generatePreview);
  $('#codeBegin').html(generateCodeBegin);
}
updateButton();
/*end UpdateButton*/
let filtersChange = $('.wrapper').find('select,input');
filtersChange.on('input change', function(e) {
  updateButton();
});
$(document).ready(function(){
  updateButton();
})
})(jQuery);


function copyBegin(){
    var text = document.getElementById("codeBegin").innerText;
    navigator.clipboard.writeText(text);
    alert('copied');
}
function copyEnd(){
    var text = document.getElementById("codeEnd").innerText;
    navigator.clipboard.writeText(text);
    alert('copied');
}

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
    
        generatePreview ='<span style="mso-element-wrap:none;mso-element-left:center;font-size:0;"></span><div style="max-height:'+frameTopPosition+'px;max-width:'+emailWidth+'px; mso-element-wrap:no-wrap-beside;mso-element-left:center;margin: 0 auto;"><img src="'+imgUrl+'" alt="" width="'+emailWidth+'" border="0" style="width:100%;max-width:'+emailWidth+'px;display:block;border:0;margin:0 auto;"></div></div><div style="mso-element-frame-width:'+frameWidth+'px;mso-element-wrap:no-wrap-beside; mso-element-left:center;mso-margin-top-alt:'+frameTopPosition+'px;max-width:'+frameWidth+'px;margin:0 auto;font-family: '+frameFontFamily+';font-size:'+frameFontSize+'px;line-height:1.5;mso-line-height-rule-alt:150%; color:'+frameColor+';'+frameBgColor+';padding:'+frameTbPadding+'px '+frameLrPadding+'px;text-align:'+frameTextAlign+';display:block;position:relative;opacity:0.999"><!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center" style="font-family: '+frameFontFamily+';font-size:'+frameFontSize+'px;line-height:1.5;mso-line-height-rule-alt:150%; color:'+frameColor+';padding:'+frameTbPadding+'px '+frameLrPadding+'px;text-align:'+frameTextAlign+'; '+frameBgColor+'"><![endif]--><p style="margin:0">'+frameText+'</p><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></div>';
        generateCodeBegin='&lt;span style="mso-element-wrap:none;mso-element-left:center;font-size:0;"&gt;&lt;/span&gt;&lt;div style="max-height:'+frameTopPosition+'px;max-width:'+emailWidth+'px; mso-element-wrap:no-wrap-beside;mso-element-left:center;margin: 0 auto;"&gt;&lt;img src="'+imgUrl+'" alt="" width="'+emailWidth+'" border="0" style="width:100%;max-width:'+emailWidth+'px;display:block;border:0;margin:0 auto;"&gt;&lt;/div&gt;&lt;/div&gt;&lt;div style="mso-element-frame-width:'+frameWidth+'px;mso-element-wrap:no-wrap-beside; mso-element-left:center;mso-margin-top-alt:'+frameTopPosition+'px;max-width:'+frameWidth+'px;margin:0 auto;font-family: '+frameFontFamily+';font-size:'+frameFontSize+'px;line-height:1.5;mso-line-height-rule-alt:150%; color:'+frameColor+';'+frameBgColor+';padding:'+frameTbPadding+'px '+frameLrPadding+'px;text-align:'+frameTextAlign+';display:block;position:relative;opacity:0.999"&gt;&lt;!--[if (gte mso 9)|(IE)]&gt;&lt;table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"&gt;&lt;tr&gt;&lt;td align="center" style="font-family: '+frameFontFamily+';font-size:'+frameFontSize+'px;line-height:1.5;mso-line-height-rule-alt:150%; color:'+frameColor+';padding:'+frameTbPadding+'px '+frameLrPadding+'px;text-align:'+frameTextAlign+'; '+frameBgColor+'"&gt;&lt;![endif]--&gt;&lt;p style="margin:0"&gt;'+frameText+'&lt;/p&gt;&lt;!--[if (gte mso 9)|(IE)]&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;![endif]--&gt;&lt;/div&gt;';
  
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

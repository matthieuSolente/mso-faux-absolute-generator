/***********************************************/
/************ MSO faux absolute CODE *******/
/***********************************************/
(function($){
 var generateCodeBegin,generatePreview,imgUrl,bgFallbackColor,imgWidth,frameWidth,imgHeight,frameTopPosition,frameTbPadding,frameLrPadding;

 function updateButton(){ 
    imgUrl=$('#imgUrl').val();
    bgFallbackColor=$('#bgFallbackColor').val();
    imgWidth=$('#imgWidth').val();
    frameWidth=$('#frameWidth').val();
    imgHeight=$('#imgHeight').val();
    frameTopPosition=$('#frameTopPosition').val();
    frameTbPadding=$('#frameTbPadding').val();
    frameLrPadding=$('#frameLrPadding').val();

    generatePreview='<span style="mso-element-wrap:none;mso-element-left:center;font-size:0;"></span><div style="max-height:0px;mso-element-wrap:no-wrap-beside;mso-element-left:center;background-color:'+bgFallbackColor+'"><img src="'+imgUrl+'" alt="" width="'+imgWidth+'" border="0" style="width:100%;max-width:'+imgWidth+'px;display:block;border:0;margin:0 auto;"></div><div  style="mso-element-frame-width:'+frameWidth+'px;mso-element-wrap:no-wrap-beside; mso-element-left:center;mso-margin-top-alt:'+frameTbPadding+'px;max-width:'+frameWidth+'px;margin:0 auto;height:'+imgHeight+'px;font-family: Arial,sans-serif;font-size:1em;line-height:1.5;mso-line-height-rule-alt:150%; color: #ffffff;"><div style="padding:'+frameTbPadding+'px '+frameLrPadding+'px"><p id="previewText" contenteditable="true">Your content</p></div></div>'
    generateCodeBegin = '&lt;span style=&quot;mso-element-wrap:none;mso-element-left:center;font-size:0;&quot;&gt;&lt;/span&gt;<br/>&lt;div style=&quot;max-height:0px;mso-element-wrap:no-wrap-beside;mso-element-left:center;background-color:'+bgFallbackColor+'&quot;&gt;<br/>&lt;img src=&quot;'+imgUrl+'&quot; alt=&quot;&quot; width=&quot;'+imgWidth+'&quot; border=&quot;0&quot; style=&quot;width:100%;max-width:'+imgWidth+'px;display:block;border:0;margin:0 auto;&quot;&gt;&lt;/div&gt;<br/>&lt;div  style=&quot;mso-element-frame-width:'+frameWidth+'px;mso-element-wrap:no-wrap-beside; mso-element-left:center;mso-margin-top-alt:'+frameTbPadding+'px;max-width:'+frameWidth+'px;margin:0 auto;height:'+imgHeight+'px;font-family: Arial,sans-serif;font-size:1em;line-height:1.5;mso-line-height-rule-alt:150%; color: #ffffff;&quot;&gt;<br/>&lt;div style=&quot;padding:'+frameTbPadding+'px '+frameLrPadding+'px&quot;&gt;'; 
    generateCodeEnd='&lt;/div&gt;&lt;/div&gt;';
  $('#preview').html(generatePreview);
  $('#codeBegin').html(generateCodeBegin);
  $('#codeEnd').html(generateCodeEnd);
}
updateButton();
/*end UpdateButton*/
$(document).ready(function(){
  updateButton();
});
$( "input, select" ).on('change',function() {
  updateButton();
});
})(jQuery);


/***********************************************/
/* COPY PASTE   */
/***********************************************/
function copyPaste(element) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($(element).parent().find('.copyPaste').text()).select();
    document.execCommand("copy");
    $temp.remove();
}
/***********************************************/
/************ COPY TO CLIPBOARD FUNCTION *******/
/***********************************************/

  $('.copyPaste').wrap('<div class="copyPaste-block"></div>');   
    $('.copyPaste-block').each(function(){     
      $(this).append('<button type="button" class="copy" onclick="copyPaste(this)" aria-hidden="false" aria-label="Copy to clipboard"><span class="visually-hidden">Copy to Clipboard</span></button>');
    });

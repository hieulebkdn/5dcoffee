jQuery(document).ready(function(d){"use strict";d("form.contactForm").submit(function(){var e=d(this).find(".form-group"),n=!1,i=/^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;if(e.children("input").each(function(){var e=d(this),t=e.attr("data-rule");if(t!==undefined){var a=!1,s=t.indexOf(":",0);if(0<=s){var r=t.substr(s+1,t.length);t=t.substr(0,s)}else t=t.substr(s+1,t.length);switch(t){case"required":""===e.val()&&(n=a=!0);break;case"maxlen":e.val().length<parseInt(r)&&(n=a=!0);break;case"email":i.test(e.val())||(n=a=!0);break;case"checked":e.attr("checked")||(n=a=!0);break;case"regexp":(r=new RegExp(r)).test(e.val())||(n=a=!0)}e.next(".validation").html(a?e.attr("data-msg")!==undefined?e.attr("data-msg"):"wrong Input":"").show("blind")}}),e.children("textarea").each(function(){var e=d(this),t=e.attr("data-rule");if(t!==undefined){var a=!1,s=t.indexOf(":",0);if(0<=s){var r=t.substr(s+1,t.length);t=t.substr(0,s)}else t=t.substr(s+1,t.length);switch(t){case"required":""===e.val()&&(n=a=!0);break;case"maxlen":e.val().length<parseInt(r)&&(n=a=!0)}e.next(".validation").html(a?e.attr("data-msg")!=undefined?e.attr("data-msg"):"wrong Input":"").show("blind")}}),n)return!1;var t=d(this).serialize();return d.ajax({type:"POST",url:"contact/contact.php",data:t,success:function(e){d("#sendmessage").addClass("show"),d("#errormessage").ajaxComplete(function(){"OK"==e?d("#sendmessage").addClass("show"):(d("#sendmessage").removeClass("show"),result=e),d(this).html(result)})}}),!1})});
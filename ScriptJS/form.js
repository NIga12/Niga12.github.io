	jQuery.validator.addMethod(
  "regex",
   function(value, element, regexp) {
       if (regexp.constructor != RegExp)
          regexp = new RegExp(regexp);
       else if (regexp.global)
          regexp.lastIndex = 0;
          return this.optional(element) || regexp.test(value);
   },"erreur expression reguliere"
);
jQuery.extend(jQuery.validator.messages, {
    required: "veuillez remplir tous les champs"
  });
  
   jQuery(document).ready(function() {
   jQuery("#formulaire").validate({
      rules: {
         "Adresse":{
            "required": true,
            "minlength": 5,
            "maxlength": 60000,
			"regex" :  /^[0-9a-zA-Z]{34}$/
         },
         "Code_Postal": {
            "required": true,
            "maxlength": 5
         },
         "Ville": {
            "required": true,
			 "minlength": 5,
            "maxlength": 60000,
			"regex": /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/
         },
		 "Hash_trans": {
		 "required": true,
		 "regex": /^[a-fA-F0-9]{64}$/
		},
		
     	"Hash_bloc": {
		"required": true
		//"regex": /^(\+33\.|0)[0-9]{9}$/ 
		},
		 "Index_bloc": {
		"required": true
		//"regex": /^(\+33\.|0)[0-9]{9}$/
		}  
	}
  )
});

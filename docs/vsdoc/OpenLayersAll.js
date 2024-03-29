
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for atropa */

(function (window) {
    

    window.atropa = {
        /// <summary>Container for all Glorious classes, functions, etc.</summary>
        /// <returns type="atropa"/>
      
        /// <field name="data" type="">Container for gobal data related to the classes and functions.</field>
        data : {}, 
                
        supportCheck: function(className, errorMessage) {
            /// <summary>Checks whether this class has been marked as unsupported and throws an 
            ///  error if it has.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="errorMessage" type="String">Optional. A custom error message. Defaults to
            ///  atropa.data[className].error</param>
        }, 
        
        requires: function(className, requirementFn, errorMessage) {
            /// <summary>Pushes a requirement check into atropa.data.requirements. The test
            ///  tests whether the class is supported in this environment. Sets
            ///  atropa.data[className]&apos;s support to unsupported and error to errorMessage
            ///  if the requirementFn returns false. The requirement checks will all be run
            ///  after the library has loaded.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="requirementFn" type="Function">A function to test whether or not the class
            ///  is supported in this environment. If supported, returns true otherwise
            ///  return false.</param>
            /// <param name="errorMessage" type="String">The error message to use when this class or its
            ///  methods are called in unsupported environments. Defaults to:
            ///  &apos;The atropa.&apos; + className + &apos; class is unsupported in this environment.&apos;;</param>
        }
        
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
/* vsdoc for atropa.data */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.data = {
        /// <summary>Container for gobal data related to the classes and functions.</summary>
        /// <returns type="atropa.data"/>
                
    };

    var $x = window.atropa.data;
    $x.__namespace = "true";
    $x.__typeName = "atropa.data";
})(this);

  

  
  
/* vsdoc for atropa.HTMLParser */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.HTMLParser = function(){
        /// <summary>Creates a new HTML Parser<br />
        /// /// Carry out DOM operations without loading content to the active document.</summary>
        /// <field name="doc" type="HTML DOM Document">Holds the created HTML DOM Document.</field>
        doc : new HTML DOM Document(), 
    };

    var $x = window.atropa.HTMLParser;
    $x.prototype = {
                
        newDocument: function() {
            /// <summary>Creates a blank HTML DOM Document.</summary>
            /// <returns type="HTML DOM Document">Resets the doc property of this instance
            ///  and, returns a blank HTML Document for you to load data into.</returns>
        }, 
        
        loadString: function(htmlstring) {
            /// <summary>Creates a new HTML DOM Document and loads the given string into it.</summary>
            /// <param name="htmlstring" type="String">a string of HTML data</param>
            /// <returns type="HTML DOM Document">Resets the doc property of this instance,
            /// loading a new document with the string given.</returns>
        }
        
    };

    $x.__class = "true";
    $x.__typeName = "atropa.HTMLParser";
})(this);



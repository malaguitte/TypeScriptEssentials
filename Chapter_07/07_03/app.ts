const jQuery = {
    version: 1.19,
    fn: {

    }
};

(function defineType($) {

    if ($.version < 1.15) {
        throw "Plugin requires version 1.15 or higher"
    }

    $.fn = function() {
        //some code.
    }
})(jQuery);
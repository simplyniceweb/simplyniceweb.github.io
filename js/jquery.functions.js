$(function() {

    var func = {
        isFirstEnd: function() {
            var letterWrapper = $(".letters-wrapper"),
                currentLetter = letterWrapper.data("letter");

            if (currentLetter === "A") {
                $(".btn-prev").attr("disabled", true);
            } else if (currentLetter === "Z") {
                $(".btn-next").attr("disabled", true);
            }
        },
        nextImage: function() {
            return $(".btn-next").on("click", function(){

                var letterWrapper = $(".letters-wrapper"),
                    currentLetter = letterWrapper.data("letter"),
                    letterSrc = "/img/letters/",
                    forSrc = "/img/forletters/",
                    format = ".png";

                if (currentLetter == "Z") {
                    return false;
                }

                var newLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
                if (newLetter == "Z") {
                    $(".btn-next").attr("disabled", true);
                } else {
                    $(".btn-prev").attr("disabled", false);
                }

                letterWrapper.data("letter", newLetter);
                $("img.letter-img").attr("src", letterSrc+"Letter-"+newLetter+format);
                $("img.for-img").attr("src", forSrc+"for-"+newLetter+format);

            });
        },
        prevImage: function() {
            return $(".btn-prev").on("click", function(){

                var letterWrapper = $(".letters-wrapper"),
                    currentLetter = letterWrapper.data("letter"),
                    letterSrc = "/img/letters/",
                    forSrc = "/img/forletters/",
                    format = ".png";

                if (currentLetter == "A") {
                    $(".btn-prev").attr("disabled", true);
                    return false;
                } else {
                    $(".btn-next").attr("disabled", false);
                }

                var newLetter = String.fromCharCode(currentLetter.charCodeAt(0) - 1);
                if (newLetter == "A") {
                    $(".btn-prev").attr("disabled", true);
                }

                letterWrapper.data("letter", newLetter);
                $("img.letter-img").attr("src", letterSrc+"Letter-"+newLetter+format);
                $("img.for-img").attr("src", forSrc+"for-"+newLetter+format);

            });
        },
        keyCode: function() {
            return jQuery(document).bind('keydown', function ( e ){
                var code = e.keyCode;

                console.log( code );

                if (code == 37) {
                    $(".btn-prev").trigger("click");
                }

                if (code == 39) {
                    $(".btn-next").trigger("click");
                }
            });
        }
    };

    func.isFirstEnd();
    func.nextImage();
    func.prevImage();
    func.keyCode();
});
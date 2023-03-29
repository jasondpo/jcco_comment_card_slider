// Script for custom slideshow on homepage

(function($) {
    var theShow = $(".slideshow").html();

    // Current card
    var currentCard = 1;
     $(".currentCard").text(currentCard);

    // Total number of cards
    var cardCount = $(".cardHolder");
        cardCount = cardCount.length;
    $(".totalCards").text(cardCount);


    //Slide Animation 
    $(".slideshow > .cardHolder:gt(0)").hide();
    var slideAnimation = true;
    var slideShowSpeed = 720;
    var currentFrame = 0;
    var currentSecond = 0;
    var requestAnimationFrame = window.requestAnimationFrame ||
                                window.mozRequestAnimationFrame ||
                                window.webRequestAnimationFrame ||
                                window.msRequestAnimationFrame;


    function startSlideShow(){
        cardCounter();   
        $('.slideshow > .cardHolder:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slideshow');
    }
    throttle();

    function throttle(){
        currentFrame++
        if(currentFrame>=slideShowSpeed && slideAnimation == true){ 
            startSlideShow()
            currentFrame=0;
        }

        window.requestAnimationFrame(throttle);
    }

    function cardCounter(){
        currentCard++
        if(currentCard > cardCount){
            currentCard=1;
        }
        setTimeout(()=>{
            $(".currentCard").text(currentCard);
        },500)
    }


    ////////////// Manual Direction STARTS ////////////////
    $(".forwardBtn").click(function(){
        slideDirection("forward");
        fillInName();
    })

    $(".reverseBtn").click(function(){
        slideDirection("reverse");
        fillInName();
    })

    function slideDirection(direction){
        slideAnimation=false;
        $('.slideshow').html(theShow);

        if(direction == "forward"){
            currentCard++
            if(currentCard > cardCount){
                currentCard=1; 
            }
            
            $(".cardHolder").each(function(){ 
                if($(this).index()==currentCard) {
                    $(this).show();
                }else{
                    $(this).hide(); 
                }
    
            });
        }

        if(direction == "reverse"){
            currentCard--
            if(currentCard <= 0){
                currentCard=cardCount; 
            }
            $(".cardHolder").each(function(){
                $(this).hide();     
            });

            $(".cardHolder").each(function(){
                if($(this).index()==currentCard) {
                    $(this).show();
                }   
            });
        } 
        $(".currentCard").text(currentCard);
        $(".totalCards").text(cardCount);

    }

    ////////////// Manual Direction ENDS ////////////////

    ////////////// Auto Update Branch Tag/ Location Based on JPG Name ////////////////

    function fillInName(){
        var branchName;
        $(".branchImg img").each(function(){
            branchName = $(this).attr("src");
            // branchName = $(this).data("src"); *blocs
            branchName = branchName.split("/").pop().split(".")[0];
            if(branchName == "dixie"){
                $(this).siblings(".branchName").find("p").text("Dixie Branch");
                $(this).closest(".branchImg").siblings(".quoteContainer").find(".location p").text("Dixie Branch Customer");
            }
            if(branchName == "east"){
                $(this).siblings(".branchName").find("p").text("East Branch");
                $(this).closest(".branchImg").siblings(".quoteContainer").find(".location p").text("East Branch Customer");
            }
            if(branchName == "fairdale"){
                $(this).siblings(".branchName").find("p").text("Fairdale Branch");
                $(this).closest(".branchImg").siblings(".quoteContainer").find(".location p").text("Fairdale Branch Customer");
            }
            if(branchName == "highview"){
                $(this).siblings(".branchName").find("p").text("Highview Branch");
                $(this).closest(".branchImg").siblings(".quoteContainer").find(".location p").text("Highview Branch Customer");
            }
            if(branchName == "jtown"){
                $(this).siblings(".branchName").find("p").text("Jeffersontown Branch");
                $(this).closest(".branchImg").siblings(".quoteContainer").find(".location p").text("Jeffersontown Branch Customer");
            }
            if(branchName == "west"){
                $(this).siblings(".branchName").find("p").text("West Branch");
                $(this).closest(".branchImg").siblings(".quoteContainer").find(".location p").text("West Branch Customer");
            }
            if(branchName == "westport"){
                $(this).siblings(".branchName").find("p").text("Westport Branch");
                $(this).closest(".branchImg").siblings(".quoteContainer").find(".location p").text("Westport Branch Customer");
            }
            if(branchName == "downtown"){
                $(this).siblings(".branchName").find("p").text("Downtown Branch");
                $(this).closest(".branchImg").siblings(".quoteContainer").find(".location p").text("Downtown Branch Customer");
            }
        })
    }
    fillInName();

})( jQuery );	
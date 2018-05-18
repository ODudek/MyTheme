function detectSpeed() {
    var slowLoad = window.setTimeout( function() {
        console.log(window.navigator.connection)      
        }, 10 );
    
        window.addEventListener( 'load', function() {
            window.clearTimeout( slowLoad );
        }, false );
}

detectSpeed()
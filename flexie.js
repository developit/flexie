(function(){
    var flexieCount = 0;
    var handleFlex =  function(){
        var flexies = document.querySelectorAll("[data-flex]");
        for(var i = 0; i < flexies.length; i++){
            flex = flexies[i];
            // true is vertical, false is horizontal
            direction = (flex.getAttribute("data-flex-direction")||"vertical")=="vertical";
            //Ugly hack, querySelectorAll doesn't return an array, but an ArrayList, but this will force it into an array
	    // Create a temportary class to select the direct children of this flex node
	    var tempClass = flex.className;
	    flex.className+= " flexieUniqueClass"+(++flexieCount);
            flexors = [].slice.call(flex.querySelectorAll(".flexieUniqueClass"+flexieCount+" > [data-flex-weight]"));
            flex.className = tempClass;
	    var totalWeight = 0;
            for(var c = 0; c < flexors.length; c++){
                totalWeight += parseFloat(flexors[c].getAttribute("data-flex-weight")||0);
            }
            var total = 0;
            for(var c = 0; c < flex.children.length; c++){
                var child = flex.children[c];
                if(child.nodeType !== 1) continue;
                if(flexors.indexOf(child) === -1){
                    total += child["offset"+(direction?"Height":"Width")];
                }
            }
            for(var c = 0; c < flexors.length; c++){
                var calculatedSize = (parseFloat(flexors[c].getAttribute("data-flex-weight")||0) / totalWeight)*(flex["offset"+(direction?"Height":"Width")]-total);
                    flexors[c].style[direction?"height":"width"] = calculatedSize+"px";
            }
            
        }
    };
    window.addEventListener("resize",handleFlex, false);
    document.addEventListener("DOMContentLoaded", handleFlex, false);
    handleFlex();
})();


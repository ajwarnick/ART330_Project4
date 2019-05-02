console.log("js loaded");

// This section is to make a field the user types into
// and we can do something if they type the magic phrase

// These are the variable you will need
let magicPhrase = "web";
let name = "Your name does not match any in our system";

let editable = document.getElementById('textInput');
let output = document.getElementById('textOutput');


// if the editable feild is present we add an event listener 
if ( editable ){ 
    // This happend each time the text in the textInput changes
    editable.addEventListener('input', function() {
        //console.log(editable.innerHTML);
        if( editable.innerHTML.includes(magicPhrase) ){
            // This happens if the magicPhrase is in the text typed
            output.innerHTML = "";
            //this takes you to a new page
            window.location.href = '/index.html';
        }else{
            output.innerHTML = name;
        }
    });
}



// This is the way we link to pages based on a dice roll
document.querySelectorAll('.random_link').forEach(function(random_link) {
    // Now do something with my button
    random_link.addEventListener("click", function(){
        let data = Object.assign({}, random_link.dataset);
        // We get the number of links and roll a dice of that many sides
        let number_of_links = Object.keys(data).length;
        let dice_roll = Math.floor(Math.random() * Math.floor(number_of_links));

        // we send the window to the rolled link
        window.location.href = Object.values(data)[dice_roll]
    })
});





// section to save stats etc. 

// Copyright (c) 2015 Florian Hartmann, https://github.com/florian https://github.com/florian/cookie.js
!function(a,b){var c=function(){return c.get.apply(c,arguments)},d=c.utils={isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isPlainObject:function(a){return!!a&&"[object Object]"===Object.prototype.toString.call(a)},toArray:function(a){return Array.prototype.slice.call(a)},getKeys:Object.keys||function(a){var b=[],c="";for(c in a)a.hasOwnProperty(c)&&b.push(c);return b},encode:function(a){return String(a).replace(/[,;"\\=\s%]/g,function(a){return encodeURIComponent(a)})},decode:function(a){return decodeURIComponent(a)},retrieve:function(a,b){return null==a?b:a}};c.defaults={},c.expiresMultiplier=86400,c.set=function(c,e,f){if(d.isPlainObject(c))for(var g in c)c.hasOwnProperty(g)&&this.set(g,c[g],e);else{f=d.isPlainObject(f)?f:{expires:f};var h=f.expires!==b?f.expires:this.defaults.expires||"",i=typeof h;"string"===i&&""!==h?h=new Date(h):"number"===i&&(h=new Date(+new Date+1e3*this.expiresMultiplier*h)),""!==h&&"toGMTString"in h&&(h=";expires="+h.toGMTString());var j=f.path||this.defaults.path;j=j?";path="+j:"";var k=f.domain||this.defaults.domain;k=k?";domain="+k:"";var l=f.secure||this.defaults.secure?";secure":"";f.secure===!1&&(l=""),a.cookie=d.encode(c)+"="+d.encode(e)+h+j+k+l}return this},c.setDefault=function(a,e,f){if(d.isPlainObject(a)){for(var g in a)this.get(g)===b&&this.set(g,a[g],e);return c}if(this.get(a)===b)return this.set.apply(this,arguments)},c.remove=function(a){a=d.isArray(a)?a:d.toArray(arguments);for(var b=0,c=a.length;b<c;b++)this.set(a[b],"",-1);return this},c.removeSpecific=function(a,b){if(!b)return this.remove(a);a=d.isArray(a)?a:[a],b.expires=-1;for(var c=0,e=a.length;c<e;c++)this.set(a[c],"",b);return this},c.empty=function(){return this.remove(d.getKeys(this.all()))},c.get=function(a,b){var c=this.all();if(d.isArray(a)){for(var e={},f=0,g=a.length;f<g;f++){var h=a[f];e[h]=d.retrieve(c[h],b)}return e}return d.retrieve(c[a],b)},c.all=function(){if(""===a.cookie)return{};for(var b=a.cookie.split("; "),c={},e=0,f=b.length;e<f;e++){var g=b[e].split("="),h=d.decode(g.shift()),i=d.decode(g.join("="));c[h]=i}return c},c.enabled=function(){if(navigator.cookieEnabled)return!0;var a="_"===c.set("_","_").get("_");return c.remove("_"),a},"function"==typeof define&&define.amd?define(function(){return{cookie:c}}):"undefined"!=typeof exports?exports.cookie=c:window.cookie=c}("undefined"==typeof document?null:document);

// here is an example setting health (cookie.html) and using it (cookie2.html)
let add_health = document.getElementById("addhealth");

if ( add_health ){ 
    add_health.addEventListener("click", function(){ 
        
        if( cookie.get('health') ){

            let healthNumber = cookie.get('health');
            healthNumber = Number(healthNumber) + 1;
            cookie.set('health', healthNumber)

        }else{
            cookie.set('health', 1)
        }
        console.log(cookie.get('health'));
    });
}

function resethealth( ){
    cookie.set('health', 1);
}

document.querySelectorAll('.use_health').forEach(function( health_item ) {

    let threshold =  Number( health_item.dataset.healththreshold );
    let health = Number( cookie.get('health') );

    if( health >= threshold  ){
        health_item.classList.toggle("none");
    }
    
});

var str = "<p>“ Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit aenean rhoncus. ”</p><small>- Jamie Richardson, Founder of Cocoa Media</small>",
i = 0,
isTag,
text;

(function type() {
text = str.slice(0, ++i);
if (text === str) return;

document.getElementById('typeWriterFirst').innerHTML = text;

var char = text.slice(-1);
if( char === '<' ) isTag = true;
if( char === '>' ) isTag = false;

if (isTag) return type();
setTimeout(type, 80);
}());


var str = "<p>“ Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit aenean rhoncus. ”</p><small>- Bart Thompson, Founder of Rainel</small>",
i = 0,
isTag,
text;

(function type() {
text = str.slice(0, ++i);
if (text === str) return;

document.getElementById('typeWriterSecond').innerHTML = text;

var char = text.slice(-1);
if( char === '<' ) isTag = true;
if( char === '>' ) isTag = false;

if (isTag) return type();
setTimeout(type, 80);
}());
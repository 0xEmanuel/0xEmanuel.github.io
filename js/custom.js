//insert Another headline

/*
about = document.getElementsByClassName("about")[0]
ul = about.getElementsByTagName("ul")[0]

h = document.createElement('h2');
h.textContent = 'M. Sc. in IT-Security';

about.insertBefore(h, ul);

*/

//insert small text at the end of the about block
text = 

"Hello, my name is Emanuel and I have a Master's degree in IT Security from the RUB. I have practical experience in malware analysis, pentesting and software development."

about = document.getElementsByClassName("about")[0]
ul = about.getElementsByTagName("ul")[0]
ul.insertAdjacentHTML('afterend', '<p>'+text+'</p>');

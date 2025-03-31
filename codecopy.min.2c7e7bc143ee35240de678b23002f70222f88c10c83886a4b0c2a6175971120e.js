// Code copy button
document.querySelectorAll('pre > code').forEach((codeblock) => {
const container = codeblock.parentNode.parentNode;
const copybutton = document.createElement('button');
copybutton.classList.add('copy-code');
copybutton.innerText = 'copy';
function copyingDone() {
copybutton.innerText = 'copied!';
setTimeout(() => {
copybutton.innerText = 'copy';
}, 2000);
}
copybutton.addEventListener('click', (cb) => {
if ('clipboard' in navigator) {
navigator.clipboard.writeText(codeblock.textContent);
copyingDone();
return;
}
const range = document.createRange();
const selection = window.getSelection();
range.selectNodeContents(codeblock);
selection.removeAllRanges();
selection.addRange(range);
try {
document.execCommand('copy');
copyingDone();
} catch (e) {
};
selection.removeRange(range);
});
if (container.classList.contains("highlight")) {
container.prepend(copybutton);
} else if (container.parentNode.firstChild == container) {
// td containing LineNos
} else if (codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "TABLE") {
// table containing LineNos and code
codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.prepend(copybutton);
} else {
// code blocks not having highlight as parent class
codeblock.parentNode.prepend(copybutton);
}
});
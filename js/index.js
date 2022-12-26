let answerNode = document.querySelector(`#answer`);
let checkNode = document.querySelector(`#check`);
let resultNode = document.querySelector(`#result`);

// кнопки с буквами
let a = document.querySelector(`#a`);
let b = document.querySelector(`#b`);
let c = document.querySelector(`#c`);
let d = document.querySelector(`#d`);
let e = document.querySelector(`#e`);
let f = document.querySelector(`#f`);
let g = document.querySelector(`#g`);
let h = document.querySelector(`#h`);
let i = document.querySelector(`#i`);
let j = document.querySelector(`#j`);
let k = document.querySelector(`#k`);
let l = document.querySelector(`#l`);
let m = document.querySelector(`#m`);
let n = document.querySelector(`#n`);
let o = document.querySelector(`#o`);
let p = document.querySelector(`#p`);
let q = document.querySelector(`#q`);
let r = document.querySelector(`#r`);
let s = document.querySelector(`#s`);
let t = document.querySelector(`#t`);
let u = document.querySelector(`#u`);
let v = document.querySelector(`#v`);
let w = document.querySelector(`#w`);
let x = document.querySelector(`#x`);
let y = document.querySelector(`#y`);
let z = document.querySelector(`#z`);


// Клик по кнопке проверить
checkNode.addEventListener(`click`, function () {
    if (answerNode.innerHTML=='cat') {
        resultNode.innerHTML = 'Ты угадал';
    }
    else {
        resultNode.innerHTML ='Попробуй снова,лошара';
        answerNode.innerHTML ='';
    }
});

// Клик по кнопкам с буквами
c.addEventListener(`click`, function() {
    answerNode.innerHTML += 'c';
    c.classList.add('disabled')
});
a.addEventListener(`click`, function() {
    answerNode.innerHTML += 'a';
    a.classList.add('disabled')
});
t.addEventListener(`click`, function() {
    answerNode.innerHTML += 't';
    t.classList.add('disabled')
});
//a.addEventListener(`click`, function () {answerNode.innerHTML += 'a'});
b.addEventListener(`click`, function () {answerNode.innerHTML += 'b'});
//c.addEventListener(`click`, function () {answerNode.innerHTML += 'c'});
d.addEventListener(`click`, function () {answerNode.innerHTML += 'd'});
e.addEventListener(`click`, function () {answerNode.innerHTML += 'e'});
f.addEventListener(`click`, function () {answerNode.innerHTML += 'f'});
g.addEventListener(`click`, function () {answerNode.innerHTML += 'g'});
h.addEventListener(`click`, function () {answerNode.innerHTML += 'h'});
i.addEventListener(`click`, function () {answerNode.innerHTML += 'i'});
j.addEventListener(`click`, function () {answerNode.innerHTML += 'j'});
k.addEventListener(`click`, function () {answerNode.innerHTML += 'k'});
l.addEventListener(`click`, function () {answerNode.innerHTML += 'l'});
m.addEventListener(`click`, function () {answerNode.innerHTML += 'm'});
n.addEventListener(`click`, function () {answerNode.innerHTML += 'n'});
o.addEventListener(`click`, function () {answerNode.innerHTML += 'o'});
p.addEventListener(`click`, function () {answerNode.innerHTML += 'p'});
q.addEventListener(`click`, function () {answerNode.innerHTML += 'q'});
r.addEventListener(`click`, function () {answerNode.innerHTML += 'r'});
s.addEventListener(`click`, function () {answerNode.innerHTML += 's'});
//t.addEventListener(`click`, function () {answerNode.innerHTML += 't'});
u.addEventListener(`click`, function () {answerNode.innerHTML += 'u'});
v.addEventListener(`click`, function () {answerNode.innerHTML += 'v'});
w.addEventListener(`click`, function () {answerNode.innerHTML += 'w'});
x.addEventListener(`click`, function () {answerNode.innerHTML += 'x'});
y.addEventListener(`click`, function () {answerNode.innerHTML += 'y'});
z.addEventListener(`click`, function () {answerNode.innerHTML += 'z'});

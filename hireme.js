let start = -2147483648,
    end = 2147483647

function solution(str) {
    return Math.max(...str.split(/([.!?])+/g)
    .filter(sentence => !sentence.includes('.') && !sentence.includes('!') && !sentence.includes('?'))
    .map(sentence => sentence.split(' ').filter(sentence => sentence !== ''))
    .map(sentence => sentence.length))
}
console.log(solution('ksjdfg. (*^....(*&(*   lk;ghjfd... jg jg ld eo .. 0987&*^ . klfgkf kfhg geeb dislll hg'))
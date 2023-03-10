
const p = new Promise((resolve, reject) => {
    //pending

    const success = true;   //성공 Or 실패
    setTimeout(() => {
        if(success){
            resolve("Complate");
        }
        else{
            reject(new Error("Error Reason"));
        }     
    }, 3000);   //3초 후 이행상태 돌입

});

p.then((x) => {
    console.log('callback', x);
})
.catch((e) => {
    console.log('catch', e);
})
console.log('hello');


//# Promise.resolve();
//value가 프로미스 객체인지 아닌지 알 수 없는 경우
//사용하면 연결된 then 메서드를 실행한다.
//1. 프로미스 객체일 경우 resolve된 then 메서드 실행,


const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is data');
    }, 1000);
});

Promise.resolve(prom).then((data) => {
    console.log('프로미스 객체인 경우 resolve된 결과를 받아 then이 실행됩니다.', data);
});

//2. 프로미스 객체가 아닌 경우 value를 인자로 보내면서 then 메서드 실행
const func = () => {
    for(let i = 0; i< 10000; i++){
        for(let j = 0; j < 100000; j++){

        }
    }
    return 'COMPLATE'
}
Promise.resolve(func()).then(data => {
    console.log('then 메서드가 없는 경우 fufilled됩니다.', data);
});




//# Promise.reject() : catch로 연결된 reject 상태로 변경된다.
Promise.reject(new Error('reason'))
.then(error => {})
.catch(error => {
    console.log('catch error', error);
});

//# Promise.all([프로미스 객체들])
//프로미스 객체를 여러개 생성하여 배열 형태로 인자로 전달 후 Promise.all 실행 시
//모든 프로미스 객체들이 fulfilled되었을 때 then의 함수가 실행된다.
//then의 함수 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려준다.
function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    });
};
Promise.all([p(1000), p(2000), p(3000)]).then((message) => {
    console.log('모두 fulfilled된 이후 실행된다.', message) //[1000,2000,3000]
});

//Promise.race([프로미스 객체들])
//프로미스 객체들 중 가장 먼저 fulfilled된 것으로 then의 함수가 실행된다.
//then의 함수 인자로 가장 먼저 fulfilled된 프로미스 객체의 resolve값을 돌려준다.
Promise.race([p(1000), p(2000), p(3000)]).then((message) => {
    console.log('가장먼저 fulfilled된 Resolve값이 반환된다.', message) //1000
});


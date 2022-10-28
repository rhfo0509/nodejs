const EventEmitter = require('events');

// custom event
const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
  console.log('이벤트 1')
})

// on : callback 2개 등록 가능
myEvent.on('event2', () => {
  console.log('이벤트 2')
})
myEvent.on('event2', () => {
  console.log('이벤트 2')
});

// once : 한 번만 실행됨
myEvent.once('event3', () => {
  console.log('이벤트 3')
})

// emit : 이벤트 호출
myEvent.emit('event1')
myEvent.emit('event2')

myEvent.emit('event3')
myEvent.emit('event3')  // 실행 안됨

myEvent.on('event4', () => {
  console.log('이벤트 4')
})
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행 안됨

// 이벤트의 특정 callback만 제거 가능
const listener = () => {
  console.log('이벤트 5')
}
myEvent.on('event5', listener)
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'))

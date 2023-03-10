import dns from "dns/promises";

// website의 IP 주소 / A: IPv4, AAAA: IPv6
const ip = await dns.lookup("naver.com");
console.log("IP: ", ip);
const a = await dns.resolve("naver.com", "A");
console.log("A: ", a);

// MX: 메일을 수신할 서버를 지정
const mx = await dns.resolve("naver.com", "MX");
console.log("MX: ", mx);

// CNAME: 하나의 도메인에 다른 이름을 부여
const cname = await dns.resolve("www.naver.com", "CNAME");
console.log("CNAME: ", cname);

const any = await dns.resolve("naver.com", "ANY");
console.log("ANY: ", any);
export function test_1(){
	return uni.request({
		url:"https://jsonplaceholder.typicode.com/posts",
		method:"GET",
		data:{}
	})
}
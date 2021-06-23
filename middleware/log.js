export default function asyncModule ($http) {
  return $http
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => console.log(res.data))
}

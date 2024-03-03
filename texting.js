const req = new XMLHttpRequest();
req.open(
  "GET",
  "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json"
);
req.send();
req.addEventListener("load", request);
function request() {
  //received data stored in data
  let data = JSON.parse(this.responseText);
  let currentPage = 1;
  let rows = 10;
}
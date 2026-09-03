function gettime() {
    console.log("test 1");
    var date = new Date();
    console.log("test 2");
    var lock = document.getElementById("timefill");
    console.log(lock);
    lock.textContent = date;
}

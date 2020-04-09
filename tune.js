function tune(arr) {
    good_freq = [329.63, 246.94, 196, 146.83, 110, 82.41];
    res = [...arr];
    arr.forEach((item, index) => {if(item === 0) {res[index] = "-"}
                             else if(Math.abs(item - good_freq[index])/good_freq[index] < 0.005) {res[index] = "OK"}
                             else if(Math.abs(item - good_freq[index])/good_freq[index] < 0.02) {res[index] = item > good_freq[index] ? "•<" : ">•"}
                                else{res[index] = item > good_freq[index] ? "•<<" : ">>•"}});
        return res;
}
let whatsNewIntervalId = null;
let whoToFollowIntervalId = null;
let whatsNew = null;
let whoToFollow = null;
 

const clearItem = (nodes, intervalToClear) => {
    nodes.forEach((item) => item.remove())
    // item.style.cssText = "display:none";
    clearInterval(intervalToClear)
}



(() => { 

    whatsNewIntervalId = setInterval(() => {
        whatsNew = document.querySelectorAll(".css-1dbjc4n.r-1ysxnx4.r-k0dy70.r-1ylenci.r-1phboty.r-rs99b7.r-dr54s0.r-1udh08x")
        if (!!whatsNew) {
            clearItem(whatsNew,whatsNewIntervalId)
        }
    }, 1000)

    
})()





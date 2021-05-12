const superbowlWin = (array) => {
    let fg = array.find( function(s) { return s.result === "W" })
    if (fg) {
        return fg['year']
    }
    else {
        return undefined
    }
}
const data = [
    {width: 150, height: 400, fill: 'purple'},
    {width: 100, height: 450, fill: 'pink'},
    {width: 80, height: 200, fill: 'blue'},
]
const svg = d3.select('svg');
const rects = svg.selectAll('rect')
    .data(data)
    // add attrs to rects already in the DOM
    .attr('width', (d, i, n) => {
        // console.log("using arrow function")
        // console.log(this)
        // console.log(n[i])
        return d.width
    })
    .attr('height', function(d, i, n){
        // console.log("using traditional function")
        // console.log(this)
        // console.log(i)
        // console.log(n)
        return d.height
    })
    .attr('fill', d =>
         d.fill
    )
    
// append the enter selection to DOM
rects.enter().append('rect')
    .attr('width', (d,i,n) => d.width)
    .attr('height', (d,i,n) => d.height)
    .attr('fill', (d,i,n) => d.fill)

console.log(rects)

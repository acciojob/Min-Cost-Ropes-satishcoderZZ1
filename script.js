function mincost(arr)
{ 
//write your code here
// return the min cost
  let heap=[...arr];
	heap.sort((a,b)=>a-b);

	let totalCost=0;
	while(heap.length>1){
		let first=heap.shift();
		let second=heap.shift();

		let cost=first+second;
		totalCost+=cost;

		let i=0;
		while(i<heap.length && heap[i]<cost) i++;
		heap.splice(i,0,cost);
	}
	return totalCost;
}

module.exports=mincost;

function maxProfit(n) {
    // Initialize counts
    let theaters = 0;
    let pubs = 0;
    let parks = 0;
  
    // Calculate max number of each property based on time units
    while (n >= 10) {
      parks += 1;
      n -= 10;
    }
  
    while (n >= 5) {
      theaters += 1;
      n -= 5;
    }
  
    while (n >= 4) {
      pubs += 1;
      n -= 4;
    }
  
    // Calculate earnings
    const earnings = theaters * 1500 + pubs * 1000 + parks * 3000;
  
    const result = `T:${theaters}P:${pubs}C:${parks}`;
  
    return [result, earnings];
  }
  
  // Test cases
  console.log(maxProfit(7));   // Output: ['T:1P:0C:0', 1500]
  console.log(maxProfit(8));   // Output: ['T:1P:0C:0', 1500]
  console.log(maxProfit(13));  // Output: ['T:2P:0C:0', 3000]
  
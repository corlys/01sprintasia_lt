function checkGrades(length: number, arr: number[]) {
  for (let i = 0; i < length; i++) {
    if (arr[i] + 3 < 40 || arr[i] % 5 === 0) {
      console.log(arr[i]);
    } else {
      const diff = arr[i] % 5;
      if (diff > 2) {
        console.log(arr[i] - diff + 5);
      } else {
        console.log(arr[i]);
      }
    }
  }
}

checkGrades(4, [73, 67, 38, 33]);

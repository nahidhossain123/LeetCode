var mergeInBetween = function (list1, a, b, list2) {
  let tempList = list1;
  for (let i = 0; i < a - 1; ++i) tempList = tempList.next;
  let tempList2 = tempList.next;
  for (let i = 0; i < b - a + 1; ++i) tempList2 = tempList2.next;
  tempList.next = list2;
  while (list2.next) {
    list2 = list2.next;
  }
  list2.next = tempList2;
  return list1;
};

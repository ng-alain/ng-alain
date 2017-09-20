export function generateData(nodes, _x, _y, _z, _preKey?: any, _tns?: any) {
    const preKey = _preKey || '0';
    const tns = _tns || nodes;

    const children = [];
    for (let i = 0; i < _x; i++) {
      const key = `${preKey}-${i}`;
      tns.push({ name: key, id: key, disableCheckbox: i === 1 });
      if (i < _y) {
        children.push(key);
      }
    }
    if (_z < 0) {
      return tns;
    }
    const level = _z - 1;
    children.forEach((key, index) => {
      tns[index].children = [];
      return generateData(nodes, _x, _y, level, key, tns[index].children);
    });
  }

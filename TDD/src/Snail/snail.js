/* eslint-disable for-direction */
export default function snail(array) {
  let newArray = [];
  let oldArray = [[]];

  const directionEnum = {
    right: 'Right',
    down: 'Down',
    left: 'Left',
    up: 'Up',
  };

  oldArray = array.map(value => value);

  let height = oldArray[0].length;
  let width = oldArray.length;

  let currentDirection = directionEnum.right;

  while (height > 0 || width > 0) {
    switch (currentDirection) {
      case directionEnum.right:
        for (let j = 0; j < width; j++) {
          newArray.push(oldArray[0][0]);
          oldArray[0].splice(0, 1);
        }

        currentDirection = directionEnum.down;
        break;
      case directionEnum.down:
        for (let i = 0; i <= height; i++) {
          if (oldArray[i] !== undefined && oldArray[i][width - 1] !== undefined) {
            newArray.push(oldArray[i][width - 1]);
            oldArray[i].splice(width - 1, width - 1);
          }
        }
        width--;
        currentDirection = directionEnum.left;
        break;
      case directionEnum.left:
        for (let j = width - 1; j >= 0; j--) {
          newArray.push(oldArray[height - 1][j]);
          oldArray[height - 1].splice(j, width);
        }

        height--;
        currentDirection = directionEnum.up;
        break;
      case directionEnum.up:
        for (let i = height - 1; i >= 0; i--) {
          console.log(newArray);
          console.log(oldArray);
          if (oldArray[i][0] !== undefined) {
            newArray.push(oldArray[i][0]);
            oldArray[i].splice(0, 1);
            console.log('----------------dfkqdjfmqdjf');
          }
          console.log(newArray);
          console.log(oldArray);
          console.log('-----------------------------');
        }
        width--;
        currentDirection = directionEnum.right;
        break;
      default:
        break;
    }

    for (let i = 0; i < oldArray.length; i++) {
      console.log(oldArray[i].length);

      if (oldArray[i].length === 0) {
        oldArray.slice(i, 1);
      }
    }
  }
}

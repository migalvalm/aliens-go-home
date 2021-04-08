import { Sprite } from '../Sprite/Sprite';

export const Actor = ({ sprite, data, position={x: 0, y: 0}, step = 0, dir = 0 }) => {
  const { h, w } = data;
  console.log(position)
  return (
    <Sprite 
      image={sprite}
      position={position}
      data={{
        x: step * w,
        y: dir * h,
        w, 
        h,
      }}
    />
  )
}
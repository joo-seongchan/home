export const Menu = ({ Price }) => {
  return (
    <>
      <h1>오늘의 가격은</h1>
      <ul>
        <li>
          {Price[0].compony}는 {Price[0].price}원 입니다.
        </li>
        <li>
          {Price[1].compony}는 {Price[1].price}원 입니다.
        </li>
        <li>
          {Price[2].compony}는 {Price[2].price}원 입니다.
        </li>
        <li>
          {Price[3].compony}는 {Price[3].price}원 입니다.
        </li>
      </ul>
    </>
  );
};

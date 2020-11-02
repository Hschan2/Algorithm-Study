SQL에서 한 테이블 내에 같은 데이터를 다른 정렬로 출력하고자 할 때 방법이 궁금했다.<br>

예를 들어서 테이블을 확인해보자 <br>

테이블 내에 여러 데이터 중 NAME이 있다고 가정해보자<br>

NAME<br>
A<br>
B<br>
C<br>
D<br>
<br>
가 있을 때 나는 이렇게 출력하고 싶다.<br>

NAME_A  NAME_B<br>
A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  D<br>
B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  C<br>
C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  B<br>
D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  A<br>
<br>

이렇게 출력하고 싶을 때 사용할 수 있는 방법을 배웠다.<br>
```
select *
from(
    select name, row_number() over(order by name asc) as rn
    from table
    ) a,
    (
    select name, row_number() over(order by name desc) as rn
    from table
    ) b
where a.rn = b.rn
```
우선
```
select name, row_number() over(order by name asc) as rn
    from table
    ) a
```
from()안에 첫 번째 순서부터 보자<br>
- row_number() over()은 ()안에 있는 것들을 순서대로 메겨준다고 생각하면 된다. <br>
    쉽게 말해서 원하는 컬럼에 대해 정렬만 하고 순서를 정하는 방법 <br>
- from에서 table이라는 테이블에서 조회하되 table에서 name을 조회할 것이고 name을 오름차순으로 정렬한 데이터를 rn이라는 이름으로 조회한 데이터를 a에 담는다.<br>
- 이와 똑같은 것을 b에 담는다. 그리고 a(테이블 1)의 rn 값과 b(테이블 2)의 rn값이 같은 데이터를 뽑을 때 위 처럼 데이터가 조회가능하다.

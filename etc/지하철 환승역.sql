-- 지하철의 환승역이 겹치는 데이터 출력하기

-- Subway_Name   Line 
-- Red Line      5
-- Red Line      10 
-- Red Line      15
-- Red Line      20
-- Green Line    9
-- Green Line    10
-- Green Line    20
-- Green Line    21
-- Yellow Line   14
-- Yellow Line   15

-- 위의 데이터가 있다고 했을 때, Line이 같아 환승역인 데이터만 출력하도록 하고 싶다. 아래와 같은 예시로 출력하고 싶을 때, 어떻게 구현해야 할까?

-- Left_Name    Right_Name    Line 
-- Red Line     Green Line    10
-- Red Line     Green Line    20
-- Red Line     Yellow Line   15
-- Green Line   Red Line      10
-- Green Line   Red Line      20
-- Yellow Line  Red Line      15

-- 첫 번째 코드
SELECT a.Subway_Name AS Left_Name, b.Subway_Name AS Right_Name, a.Line
FROM subway a
INNER JOIN subway b
ON a.Line = b.Line AND a.Subway_Name < b.Subway_Name
ORDER BY a.Line, a.Subway_Name, b.Subway_Name;

-- 두 번째 코드
SELECT a.Subway_Name AS Left_Name, b.Subway_Name AS Right_Name, a.Line
FROM subway a
INNER JOIN subway b ON a.Line = b.Line
WHERE a.Subway_Name < b.Subway_Name
ORDER BY a.Line ASC, a.Subway_Name ASC;

-- 세 번째 코드
SELECT a.Subway_Name AS Left_Name, b.Subway_Name AS Right_Name, a.Line
FROM subway_table a
JOIN subway_table b
ON a.Line = b.Line
AND a.Subway_Name <> b.Subway_Name -- 같은 이름끼리 연결되지 않도록 함
ORDER BY a.Line;

-- 네 번째 코드
SELECT t1.Subway_Name AS Left_Name,
       t2.Subway_Name AS Right_Name,
       t1.Line
FROM subway t1
INNER JOIN subway t2
ON t1.Line = t2.Line AND t1.Subway_Name <> t2.Subway_Name
WHERE t1.Subway_Name < t2.Subway_Name;

-- 다섯 번째 코드
SELECT a.Subway_Name AS Left_Name, b.Subway_Name AS Right_Name, a.Line
FROM subway AS a
JOIN subway AS b ON a.Line = b.Line AND a.Subway_Name <> b.Subway_Name
ORDER BY a.Line ASC;
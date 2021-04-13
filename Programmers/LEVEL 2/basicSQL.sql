-- 동물 수 구하기
-- 문제 설명
-- ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

-- NAME	TYPE	NULLABLE
-- ANIMAL_ID	VARCHAR(N)	FALSE
-- ANIMAL_TYPE	VARCHAR(N)	FALSE
-- DATETIME	DATETIME	FALSE
-- INTAKE_CONDITION	VARCHAR(N)	FALSE
-- NAME	VARCHAR(N)	TRUE
-- SEX_UPON_INTAKE	VARCHAR(N)	FALSE
-- 동물 보호소에 동물이 몇 마리 들어왔는지 조회하는 SQL 문을 작성해주세요.

-- 예시
-- 예를 들어 ANIMAL_INS 테이블이 다음과 같다면

-- ANIMAL_ID	ANIMAL_TYPE	DATETIME	INTAKE_CONDITION	NAME	SEX_UPON_INTAKE
-- A399552	Dog	2013-10-14 15:38:00	Normal	Jack	Neutered Male
-- A379998	Dog	2013-10-23 11:42:00	Normal	Disciple	Intact Male
-- A370852	Dog	2013-11-03 15:04:00	Normal	Katie	Spayed Female
-- A403564	Dog	2013-11-18 17:03:00	Normal	Anna	Spayed Female
-- 동물 보호소에 들어온 동물은 4마리입니다. 따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

-- count
-- 4
-- ※ 컬럼 이름(위 예제에서는 count)은 일치하지 않아도 됩니다.

-- 코드를 입력하세요
SELECT count(ANIMAL_ID)
FROM ANIMAL_INS

-- 중복 제거하기
-- 문제 설명
-- ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

-- NAME	TYPE	NULLABLE
-- ANIMAL_ID	VARCHAR(N)	FALSE
-- ANIMAL_TYPE	VARCHAR(N)	FALSE
-- DATETIME	DATETIME	FALSE
-- INTAKE_CONDITION	VARCHAR(N)	FALSE
-- NAME	VARCHAR(N)	TRUE
-- SEX_UPON_INTAKE	VARCHAR(N)	FALSE
-- 동물 보호소에 들어온 동물의 이름은 몇 개인지 조회하는 SQL 문을 작성해주세요. 이때 이름이 NULL인 경우는 집계하지 않으며 중복되는 이름은 하나로 칩니다.

-- 예시
-- 예를 들어 ANIMAL_INS 테이블이 다음과 같다면

-- ANIMAL_ID	ANIMAL_TYPE	DATETIME	INTAKE_CONDITION	NAME	SEX_UPON_INTAKE
-- A562649	Dog	2014-03-20 18:06:00	Sick	NULL	Spayed Female
-- A412626	Dog	2016-03-13 11:17:00	Normal	*Sam	Neutered Male
-- A563492	Dog	2014-10-24 14:45:00	Normal	*Sam	Neutered Male
-- A513956	Dog	2017-06-14 11:54:00	Normal	*Sweetie	Spayed Female
-- 보호소에 들어온 동물의 이름은 NULL(없음), *Sam, *Sam, *Sweetie입니다. 이 중 NULL과 중복되는 이름을 고려하면, 보호소에 들어온 동물 이름의 수는 2입니다. 따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

-- count
-- 2
-- ※ 컬럼 이름(위 예제에서는 count)은 일치하지 않아도 됩니다.

-- 코드를 입력하세요
SELECT COUNT(DISTINCT NAME) 
FROM ANIMAL_INS
WHERE name IS NOT NULL

-- NULL 처리하기
-- 문제 설명
-- ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

-- NAME	TYPE	NULLABLE
-- ANIMAL_ID	VARCHAR(N)	FALSE
-- ANIMAL_TYPE	VARCHAR(N)	FALSE
-- DATETIME	DATETIME	FALSE
-- INTAKE_CONDITION	VARCHAR(N)	FALSE
-- NAME	VARCHAR(N)	TRUE
-- SEX_UPON_INTAKE	VARCHAR(N)	FALSE
-- 입양 게시판에 동물 정보를 게시하려 합니다. 동물의 생물 종, 이름, 성별 및 중성화 여부를 아이디 순으로 조회하는 SQL문을 작성해주세요. 이때 프로그래밍을 모르는 사람들은 NULL이라는 기호를 모르기 때문에, 이름이 없는 동물의 이름은 "No name"으로 표시해 주세요.

-- 예시
-- 예를 들어 ANIMAL_INS 테이블이 다음과 같다면

-- ANIMAL_ID	ANIMAL_TYPE	DATETIME	INTAKE_CONDITION	NAME	SEX_UPON_INTAKE
-- A350276	Cat	2017-08-13 13:50:00	Normal	Jewel	Spayed Female
-- A350375	Cat	2017-03-06 15:01:00	Normal	Meo	Neutered Male
-- A368930	Dog	2014-06-08 13:20:00	Normal	NULL	Spayed Female
-- 마지막 줄의 개는 이름이 없기 때문에, 이 개의 이름은 "No name"으로 표시합니다. 따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

-- ANIMAL_TYPE	NAME	SEX_UPON_INTAKE
-- Cat	Jewel	Spayed Female
-- Cat	Meo	Neutered Male
-- Dog	No name	Spayed Female
-- ※ 컬럼 이름은 일치하지 않아도 됩니다.

-- 코드를 입력하세요
SELECT ANIMAL_TYPE, IFNULL(NAME, 'No name') as NAME , SEX_UPON_INTAKE
FROM ANIMAL_INS

-- 중성화 여부 파악하기
-- 문제 설명
-- ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

-- NAME	TYPE	NULLABLE
-- ANIMAL_ID	VARCHAR(N)	FALSE
-- ANIMAL_TYPE	VARCHAR(N)	FALSE
-- DATETIME	DATETIME	FALSE
-- INTAKE_CONDITION	VARCHAR(N)	FALSE
-- NAME	VARCHAR(N)	TRUE
-- SEX_UPON_INTAKE	VARCHAR(N)	FALSE
-- 보호소의 동물이 중성화되었는지 아닌지 파악하려 합니다. 중성화된 동물은 SEX_UPON_INTAKE 컬럼에 'Neutered' 또는 'Spayed'라는 단어가 들어있습니다. 동물의 아이디와 이름, 중성화 여부를 아이디 순으로 조회하는 SQL문을 작성해주세요. 이때 중성화가 되어있다면 'O', 아니라면 'X'라고 표시해주세요.

-- 예시
-- 예를 들어 ANIMAL_INS 테이블이 다음과 같다면

-- ANIMAL_ID	ANIMAL_TYPE	DATETIME	INTAKE_CONDITION	NAME	SEX_UPON_INTAKE
-- A355753	Dog	2015-09-10 13:14:00	Normal	Elijah	Neutered Male
-- A373219	Cat	2014-07-29 11:43:00	Normal	Ella	Spayed Female
-- A382192	Dog	2015-03-13 13:14:00	Normal	Maxwell 2	Intact Male
-- 중성화한 동물: Elijah, Ella
-- 중성화하지 않은 동물: Maxwell 2
-- 따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

-- ANIMAL_ID	NAME	중성화
-- A355753	Elijah	O
-- A373219	Ella	O
-- A382192	Maxwell 2	X
-- ※ 컬럼 이름은 일치하지 않아도 됩니다.

-- 코드를 입력하세요
SELECT ANIMAL_ID, NAME, 
CASE 
    WHEN SEX_UPON_INTAKE LIKE '%Neutered%' OR SEX_UPON_INTAKE LIKE '%Spayed%' 
    THEN 'O'
    ELSE 'X' END as 중성화
FROM ANIMAL_INS
ORDER BY ANIMAL_ID

-- DATETIME에서 DATE로 형 변환
-- 문제 설명
-- ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

-- NAME	TYPE	NULLABLE
-- ANIMAL_ID	VARCHAR(N)	FALSE
-- ANIMAL_TYPE	VARCHAR(N)	FALSE
-- DATETIME	DATETIME	FALSE
-- INTAKE_CONDITION	VARCHAR(N)	FALSE
-- NAME	VARCHAR(N)	TRUE
-- SEX_UPON_INTAKE	VARCHAR(N)	FALSE
-- ANIMAL_INS 테이블에 등록된 모든 레코드에 대해, 각 동물의 아이디와 이름, 들어온 날짜1를 조회하는 SQL문을 작성해주세요. 이때 결과는 아이디 순으로 조회해야 합니다.

-- 예시
-- 예를 들어, ANIMAL_INS 테이블이 다음과 같다면

-- ANIMAL_INS

-- ANIMAL_ID	ANIMAL_TYPE	DATETIME	INTAKE_CONDITION	NAME	SEX_UPON_INTAKE
-- A349996	Cat	2018-01-22 14:32:00	Normal	Sugar	Neutered Male
-- A350276	Cat	2017-08-13 13:50:00	Normal	Jewel	Spayed Female
-- A350375	Cat	2017-03-06 15:01:00	Normal	Meo	Neutered Male
-- A352555	Dog	2014-08-08 04:20:00	Normal	Harley	Spayed Female
-- A352713	Cat	2017-04-13 16:29:00	Normal	Gia	Spayed Female
-- SQL문을 실행하면 다음과 같이 나와야 합니다.

-- ANIMAL_ID	NAME	날짜
-- A349996	Sugar	2018-01-22
-- A350276	Jewel	2017-08-13
-- A350375	Meo	2017-03-06
-- A352555	Harley	2014-08-08
-- A352713	Gia	2017-04-13
-- 본 문제는 Kaggle의 "Austin Animal Center Shelter Intakes and Outcomes"에서 제공하는 데이터를 사용하였으며 ODbL의 적용을 받습니다.

-- 시각(시-분-초)을 제외한 날짜(년-월-일)만 보여주세요. ↩

-- 코드를 입력하세요
SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, "%Y-%m-%d") as 날짜
FROM ANIMAL_INS
import math

# while, for 등 반복문으로 하면 시간 초과 에러가 뜸

a, b, c = map(int, input().split()) # 입력한 값을 각 쪼갠다(input, split)

print(math.ceil((c-a)/(a-b))+1)
# math.ceil => 소수점 이하 올림
# 달팽이는 하루에 a-b만큼 올라간다.
# 낮에 도달했을 경우(a) 미끄러지는 경우(-b)가 없기 때문에 미리 c에서 a만큼 빼준다.
# (c-a)를 하루 올라가는 만큼(a-b)으로 나눈다.
# 시간 상 하루 더 이동하기 때문에 +1 해준다.

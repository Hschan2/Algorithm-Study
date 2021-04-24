package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

//	이진 탐색
//	원소를 반으로 분할하여 찾는 방법이다.

//	이진 탐색 조건
//	모든 원소는 정렬되어야 한다.

	public static void main(String[] args) { SpringApplication.run(DemoApplication.class, args);

//		 원소가 담겨있는 배열
		int[] arr = {3, 19, 34, 50, 87};

//		찾고자 하는 원소 값
		int key = 19;

		binarySearch(arr, key);

	}

	private static void binarySearch(int[] arr, int key) {

//		배열의 첫 번째 인덱스 값
		int left = 0;

//		배열의 마지막 값
		int right = arr.length - 1;
		int middle;

//		탐색해야 할 값이 없을 때까지 반복
		while(left <= right) {
//			이진 탐색을 위해 가운데 값 구하기
			middle = (left + right) / 2;

			if(key == arr[middle]) {
				System.out.println(key + "값의 배열 인덱스 위치는 " + middle);
				break;
			}

//			찾고하 하는 값이 배열의 중앙값보다 작을 경우
			if(key < arr[middle]) {
//				현재 데이터가 왼쪽에 위치하여 right 값을 middle 값에서 1을 뺀 값으로
				right = middle - 1;
			} else {
//				찾고하 하는 값이 배열의 중앙값보다 클 경우
//				현재 데이터는 오른쪽에 위치하여 left 값을 middle 값에서 1을 더한 값으로
				left = middle + 1;
			}
		}

//		초기 설정 변수
//		left = 0, right = 배열 길이 - 1, middle = (left + right) / 2

//		과정
//		1. 찾고자하는 Key 값이 배열의 가운데 값인 경우, middle 위치가 찾고자하는 Key 값의 인덱스 위치
//		2. 찾고자하는 Key 값이 가운데 값보다 작은 경우, middle 위치보다 왼쪽(앞)에 위치한다. (오름차순)
//		3. 찾고자하는 Key 값이 가운데 값보다 큰 경우, middle 위치보다 오른쪽(뒤)에 위치한다.	(오름차순)
	}
}

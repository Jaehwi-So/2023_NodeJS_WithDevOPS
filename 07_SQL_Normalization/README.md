# 데이터베이스 정규화

- 중복 데이터를 분리하는 것
- 정규형: 분리 결과

# 정규형 종류

1NF 2NF 3NF // BCNF 4NF 5NF

# 1NF (제1정규화)

- (주문번호(P001) / 철수 / 13살/ A001 레고 1개, A002 미니카 2개)  
  -> 다가속성 분리
- 로우를 두개로 분리.(주문번호(P001) / 철수 / 13살 / A001 레고 1개) (주문번호(P001) / 철수 / 13살 / A002 미니카 2개)  
  -> 복합속성 분리
- 컬럼 추가 (주문번호(P001) / 철수 / 13살 / A001 / 레고 / 1개) (주문번호(P001) / 철수 / 13살 / A002 / 미니카 / 2개)  
  -> 철수/13살은 중복데이터 발생 -> 중복데이터 분리
- (주문번호(P001) / 철수 / 13살), 주문번호는 PK  
  (주문번호(P001) / A001 / 레고 / 1개) (주문번호(P001) / A002 / 미니카 / 2개), 주문번호 + 상품번호를 묶어 복합키(PK)로 본다.

# 2NF (제2정규화)

- (주문번호(P001) / A001 / 레고 / 1개) -> 주문번호/수량과 상품번호/상품명과는 관련성이 멀다.  
  -> 상품과 주문내역을 분리
- (주문번호(P001) / A001 / 1개), (A001(PK), 레고)  
  -> 2정규화는 효율적인 저장에 초점을 둠. 상품명이 변경되도 한개의 로우만 변경하면 됨

# 3NF (제3정규화)

- (주문번호(P001) / 철수 / 13살)은 주문번호와 회원 정보와는 관련성이 멀다.
  -> 유저와 주문테이블을 분리
- (주문번호(P001) / 고객번호(U001) (고객번호(U001), 철수 / 13살)

# 반정규화와 비정규화

- 특정 목적을 위해 정규화 과정을 거치지 않는 형태.

# ERD

- erdcloud.com